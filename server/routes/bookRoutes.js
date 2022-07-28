import express from "express";
import { getAllBooks } from "../controller/book-controller.js";
import { addBook } from "../controller/book-controller.js";
import { getById } from "../controller/book-controller.js";
import { updateBook } from "../controller/book-controller.js";
import { deleteBook } from "../controller/book-controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
