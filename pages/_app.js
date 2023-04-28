import GlobalStyle from "../styles";
import useSWR from "swr";
import React, { useState } from "react";
import Heading from "../components/Heading/index.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { artPiecesEntries } from "../lib/localStoreageTemplate";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: artPiecesEntries,
    }
  );

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher);
  if (error) return <h2>Failed to load</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  function handleToggleFavorite(slug) {
    const pieceToUpdate = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );
    if (pieceToUpdate) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      const newArtPiece = {
        slug: slug,
        isFavorite: true,
        comments: [],
      };
      setArtPiecesInfo([...artPiecesInfo, newArtPiece]);
    }
  }
  function handleCommentSubmit(slug, comment) {
    const pieceToUpdate = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );

    const id = uid();
    const date = new Date().toLocaleDateString("en-uk");
    const time = new Date().toLocaleTimeString("en-uk");

    if (pieceToUpdate) {
      const updatedArtPiecesInfo = artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          const updatedComments = [
            ...artPiece.comments,
            { id, date, time, comment },
          ];
          return { ...artPiece, comments: updatedComments };
        } else {
          return artPiece;
        }
      });
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      const newArtPiece = {
        slug: slug,
        isFavorite: false,
        comments: [
          { id: { id }, date: { date }, time: { time }, comment: { comment } },
        ],
      };
      setArtPiecesInfo([...artPiecesInfo, newArtPiece]);
      console.log(artPiecesInfo[0]);
    }
  }
  console.log(artPiecesInfo);

  return (
    <>
      {/* {console.log(artPiecesInfo)} */}
      {/* {console.log(data)} */}
      <GlobalStyle />
      <Heading />
      <Nav data={data} />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        handleCommentSubmit={handleCommentSubmit}
      />

      <Footer />
    </>
  );
}
