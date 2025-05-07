import { useCallback, useEffect, useState } from "react";
import type { Meme } from "../types/data";

type JSONResponse = {
  data?: {
    memes: Meme[];
  };
  errors?: { message: string }[];
};

async function fetchMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes");

  const { data, errors } = (await response.json()) as JSONResponse;

  if (response.ok) {
    if (data?.memes === undefined) throw new Error("No memes found.");

    return data.memes;
  }

  const error = new Error(
    errors?.map((e) => e.message).join("\n") ?? "Network response was not OK"
  );
  throw error;
}

function getRandomIndex<T>(arr: T[]) {
  return Math.floor(Math.random() * arr.length);
}

export function useMemes(defaultMemeIdx: number) {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = useState<Meme>();

  const updateCurrentMeme = useCallback(
    (idx: number) => {
      setCurrentMeme(memes[idx]);
    },
    [memes]
  );

  const updateMemes = useCallback((newMemes: Meme[]) => {
    setMemes(newMemes);
  }, []);

  useEffect(() => {
    updateCurrentMeme(defaultMemeIdx);
  }, [memes]);

  useEffect(() => {
    fetchMemes()
      .then(updateMemes)
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const getRandomMeme = useCallback(() => {
    const randomIdx = getRandomIndex(memes);
    console.log(randomIdx);
    updateCurrentMeme(randomIdx);
  }, [memes]);

  return { currentMeme, getRandomMeme, memes };
}
