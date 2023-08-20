import express from 'express'
import LivroController from "../controllers/livrosController.js"
const router = express.Router();

router
.get("/livros", LivroController.listarlivros)
.get("/livros/:id", LivroController.listaLivroPorId)
.post("/livros", LivroController.cadastraLivro)
.put("/livros/:id", LivroController.atualizarLivro)
.delete("/livros/:id", LivroController.excluirLivro)

export default router;