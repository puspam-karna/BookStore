import Book from "../model/Book.js";

export const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ message: "no products found" });
  }
  return res.status(200).json({ books });
};

export const addBook = async (req, res) => {
  let book;
  const { name, author, description, price, available, image } = req.body;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ message: "data cannot be added" });
  }
  return res.status(200).json({ book });
};

export const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(400).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
};

export const updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });

    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(400).json({ message: "unable to update this id" });
  }
  return res.status(200).json({ book });
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(400).json({ message: "unable to delete" });
  }
  return res.status(200).json({ message: "deleted successfully" });
};
