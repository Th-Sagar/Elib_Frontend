import { Book } from "@/app/types";
import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";

const SingleBook = async ({
  params,
}: {
  params: {
    bookId: string;
  };
}) => {
  let book: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    // const response = await fetch(
    //   `${process.env.BACKEND_URL}/books/${params.bookId}`,
    //   {
    //     cache: "no-store",
    //   }
    // );

    // if we state cache then it will call the api everytime we refresh the page if not then it will call the api only once and store the data in cache and use old data
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    book = await response.json();
  } catch (error: any) {
    throw new Error("Failed to fetch book");
  }

  if (!book) {
    throw new Error("Failed to fetch book");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
      </div>

      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBook;
