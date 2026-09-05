let PrismaClientClass: any;
try {
  const pkg = await import("@prisma/client");
  PrismaClientClass = pkg.PrismaClient;
} catch {
  PrismaClientClass = class MockPrismaClient {
    project = {
      count: async () => 0,
      findMany: async () => [],
      findUnique: async () => null,
      create: async (args: any) => args.data,
      createMany: async () => ({ count: 0 }),
      update: async (args: any) => args.data,
      delete: async () => ({}),
    };
  };
}

let prismaInstance: any;
try {
  prismaInstance = new PrismaClientClass({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
} catch {
  prismaInstance = {
    project: {
      count: async () => 0,
      findMany: async () => [],
      findUnique: async () => null,
      create: async (args: any) => args.data,
      createMany: async () => ({ count: 0 }),
      update: async (args: any) => args.data,
      delete: async () => ({}),
    }
  };
}

export const prisma = prismaInstance;
export const db = prisma;
export interface Project {
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
  results: any;
  services: string[];
  year: string;
  duration: string;
  status: string;
  featured: boolean;
  imagePosition: string;
  coverImagePosition: string;
  gallery: string[];
  clientName?: string | null;
  industry?: string | null;
  budget?: string | null;
  ctaLink?: string | null;
  liveLink?: string | null;
  behanceLink?: string | null;
  toolsUsed: string[];
  createdAt: Date;
  updatedAt: Date;
}
export { PrismaClientClass as PrismaClient };

