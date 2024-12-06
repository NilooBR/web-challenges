import React from "react";
import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";

function BookVolumeDetail() {
  const currentVolumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  const volume = volumes[currentVolumeIndex];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}:{title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      ></Image>
    </>
  );
}

export default BookVolumeDetail;