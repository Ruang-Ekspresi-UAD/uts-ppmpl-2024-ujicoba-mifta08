import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { findUserById } from './repository.js';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/users/:id", (req, res) => {
    const user = findUserById(parseInt(req.params.id));
    if (user) return res.status(200).json(user);
    return res.status(404).send("User Not Found");
});

// Jangan panggil app.listen disini
// Ekspor dengan named export
export { app };
