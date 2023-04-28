import Link from "next/link";
import styled from "styled-components";

export default function Heading() {
  return (
    <header id="header">
      <Link href={"/"}>
        <h1 id="header__title">C&apos;est la vie Gallery</h1>
      </Link>
      <p id="header__slogan">
        The gallery for every user type under the sun...apparently
      </p>
    </header>
  );
}

const header = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #333;
    font-family: "Roboto", sans-serif;
  }
`;
