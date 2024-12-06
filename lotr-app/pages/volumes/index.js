import { introduction } from "../../lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Fellowship of the Bling
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">
            The two towers
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
