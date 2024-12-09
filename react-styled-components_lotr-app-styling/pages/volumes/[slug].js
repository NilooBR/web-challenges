import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #b87316;
  line-height: 1.6;
`;

const BackLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 1rem;
  color: #e3b737;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 30px;
  background-color: #f5eece;
  padding: 1rem;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    strong {
      font-weight: bold;
    }
  }

  font-size: 1rem;
`;

const CoverImage = styled(Image)`
  border-radius: 8px;
  //https://htmlcssfreebies.com/css-box-shadow-examples/
  box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: #3e0b0b;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <Container>
      <BackLink href="/volumes">← All Volumes</BackLink>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ContentWrapper>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <span>Book {ordinal}:</span> <strong>{title}</strong>
            </li>
          ))}
        </BookList>
        <CoverImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={200}
          height={300}
        />
      </ContentWrapper>
      <NavContainer>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : (
          <span />
        )}
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : (
          <span />
        )}
      </NavContainer>
    </Container>
  );
}