import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Add CORS middleware here
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(cookieParser());

// Serve uploads folder statically
app.use("/upload", express.static(path.join(__dirname, "../client/public/upload")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../client/public/upload"));
  },
  filename: (req, file, cb) => {
    // Sanitize filename by removing spaces & special characters
    const sanitizedFilename = file.originalname.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");
    cb(null, Date.now() + "_" + sanitizedFilename);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  res.status(200).json(req.file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}!`);
});
