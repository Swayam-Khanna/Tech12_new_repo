import express from "express";
import type { Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from "./routes";
import { logger } from "./lib/logger";

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOADS_DIR = join(__dirname, "../../uploads");

const app: Express = express();

app.use(
  (pinoHttp as any)({
    logger,
    serializers: {
      req(req: any) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res: any) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files as static assets
app.use("/api/uploads", express.static(UPLOADS_DIR, {
  maxAge: "1d",
  setHeaders: (res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  },
}));

// Disable HTTP 304/ETag caching for API routes to ensure 100% real-time CMS data
app.use("/api", (req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

app.use("/api", router);

// Serve frontend static files in production
const FRONTEND_DIST = join(__dirname, "../../techtitans-ai/dist");
app.use(express.static(FRONTEND_DIST));

// SPA Fallback: Send index.html for non-API routes (Express 5 compatible)
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(join(FRONTEND_DIST, "index.html"), (err) => {
    if (err) {
      next();
    }
  });
});

export default app;

