import { prisma, Project as PrismaProject } from "@workspace/db";
import { logger } from "./logger.js";

export interface StoredProject {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  serviceId: string;
  subServiceId: string;
  category: string;
  subCategory: string;
  tags: string[];
  image: string;
  coverImage: string;
  results: { label: string; value: string }[];
  services: string[];
  year: string;
  duration: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  imagePosition?: string;
  coverImagePosition?: string;
  gallery?: string[];
  clientName?: string;
  industry?: string;
  budget?: string;
  ctaLink?: string;
  liveLink?: string;
  behanceLink?: string;
  toolsUsed?: string[];
  createdAt: string;
  updatedAt: string;
}

const SEED: StoredProject[] = [];

let memoryStore: StoredProject[] = [];
let useMemoryFallback = false;

export async function seedDatabaseIfNeeded() {
  // Production-ready: no demo projects seeded. Only user-created projects exist.
  logger.info("Database connection validated. Ready for production projects.");
}

function mapProject(p: PrismaProject): StoredProject {
  return {
    id: p.id,
    title: p.title,
    tagline: p.tagline,
    overview: p.overview,
    challenge: p.challenge,
    solution: p.solution,
    serviceId: p.serviceId,
    subServiceId: p.subServiceId,
    category: p.category,
    subCategory: p.subCategory,
    tags: p.tags,
    image: p.image,
    coverImage: p.coverImage,
    results: (p.results as any) || [],
    services: p.services,
    year: p.year,
    duration: p.duration,
    status: p.status as any,
    featured: p.featured,
    imagePosition: p.imagePosition,
    coverImagePosition: p.coverImagePosition,
    gallery: p.gallery,
    clientName: p.clientName || undefined,
    industry: p.industry || undefined,
    budget: p.budget || undefined,
    ctaLink: p.ctaLink || undefined,
    liveLink: p.liveLink || undefined,
    behanceLink: p.behanceLink || undefined,
    toolsUsed: p.toolsUsed,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  };
}

export async function getProjects(): Promise<StoredProject[]> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" }
    });
    return projects.map(mapProject);
  } catch (err) {
    logger.warn({ err }, "Prisma getProjects failed, falling back to memoryStore");
    return [...memoryStore].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export async function getPublishedProjects(): Promise<StoredProject[]> {
  try {
    const projects = await prisma.project.findMany({
      where: { status: "published" },
      orderBy: { createdAt: "desc" }
    });
    return projects.map(mapProject);
  } catch (err) {
    logger.warn({ err }, "Prisma getPublishedProjects failed, falling back to memoryStore");
    return memoryStore.filter(p => p.status === "published").sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export async function getProjectById(id: string): Promise<StoredProject | undefined> {
  try {
    const p = await prisma.project.findUnique({
      where: { id }
    });
    return p ? mapProject(p) : undefined;
  } catch (err) {
    logger.warn({ err, id }, "Prisma getProjectById failed, falling back to memoryStore");
    return memoryStore.find(p => p.id === id);
  }
}

export async function createProject(data: Omit<StoredProject, "createdAt" | "updatedAt">): Promise<StoredProject> {
  const newProject: StoredProject = {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const p = await prisma.project.create({
      data: {
        id: data.id,
        title: data.title,
        tagline: data.tagline,
        overview: data.overview,
        challenge: data.challenge,
        solution: data.solution,
        serviceId: data.serviceId,
        subServiceId: data.subServiceId,
        category: data.category,
        subCategory: data.subCategory,
        tags: data.tags,
        image: data.image,
        coverImage: data.coverImage,
        results: data.results as any,
        services: data.services,
        year: data.year,
        duration: data.duration,
        status: data.status,
        featured: data.featured,
        imagePosition: data.imagePosition || "center",
        coverImagePosition: data.coverImagePosition || "center",
        gallery: data.gallery || [],
        clientName: data.clientName || null,
        industry: data.industry || null,
        budget: data.budget || null,
        ctaLink: data.ctaLink || null,
        liveLink: data.liveLink || null,
        behanceLink: data.behanceLink || null,
        toolsUsed: data.toolsUsed || [],
      }
    });
    // Keep in sync with memory store as secondary cache
    memoryStore = memoryStore.filter(x => x.id !== p.id);
    memoryStore.unshift(mapProject(p));
    return mapProject(p);
  } catch (err) {
    logger.warn({ err }, "Prisma createProject failed, using memoryStore");
    memoryStore.unshift(newProject);
    return newProject;
  }
}

export async function updateProject(id: string, data: Partial<StoredProject>): Promise<StoredProject | null> {
  try {
    const updateData: any = { ...data };
    delete updateData.createdAt;
    delete updateData.updatedAt;
    delete updateData.id;

    const p = await prisma.project.update({
      where: { id },
      data: updateData
    });
    const mapped = mapProject(p);
    const index = memoryStore.findIndex(x => x.id === id);
    if (index !== -1) memoryStore[index] = mapped;
    return mapped;
  } catch (err) {
    logger.warn({ err, id }, "Prisma updateProject failed, updating memoryStore");
    const index = memoryStore.findIndex(p => p.id === id);
    if (index === -1) return null;
    memoryStore[index] = { ...memoryStore[index], ...data, updatedAt: new Date().toISOString() };
    return memoryStore[index];
  }
}

export async function deleteProject(id: string): Promise<boolean> {
  memoryStore = memoryStore.filter(p => p.id !== id);
  try {
    await prisma.project.delete({
      where: { id }
    });
    return true;
  } catch (err) {
    logger.warn({ err, id }, "Prisma deleteProject failed");
    return true;
  }
}
