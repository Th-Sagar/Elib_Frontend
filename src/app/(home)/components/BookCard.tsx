import { Book } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className=" flex gap-5 border p-5 shadow-md rounded">
      <Image
        src={book.coverImage}
        alt={book.description}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "70%",
          height: "12rem",
        }}
      />

      <div>
        <h2 className=" line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className=" font-bold text-primary-900 mt-1">{book.author.name}</p>
        <Link
          className=" hover:bg-primary-100 hover:border-primary-100 transition-all  inline-block mt-4  border border-primary-500 py-1 text-primary-500 text-sm font-medium px-2 rounded"
          href={`/book/${book._id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
