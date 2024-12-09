import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter()
  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleRandom() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume);
    router.push(`volumes/${randomVolume.slug}`);
  }
  return (
    <>
    <Head>
      <title>The Lord of the Rings</title>
    </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          // eslint-disable-next-line react/jsx-key
          <li>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandom}>Random Volume</button>
    </>
  );
}
