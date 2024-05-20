import React from "react";
import { Book } from "@/app/types";
import BookCard from "./BookCard";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books/`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const books = await response.json();
  return (
    <div className=" grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {books.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
