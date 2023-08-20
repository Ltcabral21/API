import express from 'express'
import LivroController from "../controllers/livrosController.js"
const router = express.Router();

router
.get("/livros", LivroController.ShowBooks)
.get("/livros/:id", LivroController.ShowBooksById)
.post("/livros", LivroController.AddNewBook)
.put("/livros/:id", LivroController.UptadeBook)
.delete("/livros/:id", LivroController.Bookdelete)

export default router;