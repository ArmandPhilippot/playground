import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "../commons/Button";
import Headline, { type HeadlineType } from "../Headline/Headline";

async function fetchMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const result = await response.json();
  return await result;
}

type Meme = {
  name: string;
  url: string;
};

type MemePreviewProps = {
  headlines: HeadlineType[];
  setHeadlines: Dispatch<SetStateAction<HeadlineType[]>>;
};

function MemePreview({ headlines, setHeadlines }: MemePreviewProps) {
  const [memesList, setMemesList] = useState<Meme[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    fetchMemes().then((object) => setMemesList(object.data.memes));
    setIsFetched(true);
    return () => setIsFetched(false);
  }, [setIsFetched]);

  const [selectedMeme, setSelectedMeme] = useState<Meme | undefined>(undefined);
  useEffect(() => {
    const meme = memesList[5];
    if (!meme) return;
    setSelectedMeme(meme);
  }, [memesList]);

  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memesList.length);
    setSelectedMeme(memesList[randomIndex]);
  };

  const headlinesList = headlines.map((headline) => (
    <Headline
      key={headline.id}
      id={headline.id}
      text={headline.text}
      fontSize={`${headline.fontSize}${headline.fontUnit}`}
      xPos={headline.xPos}
      yPos={headline.yPos}
      setHeadlines={setHeadlines}
    />
  ));

  return (
    <div className="meme-preview">
      <div className="meme-preview__meme">
        {isFetched && selectedMeme ? (
          <img
            src={selectedMeme.url}
            alt={selectedMeme.name}
            className="meme-preview__image"
          />
        ) : (
          "Loading..."
        )}
        {headlinesList}
      </div>
      <Button body="Random image" modifier="random" onClick={getRandomMeme} />
    </div>
  );
}

export default MemePreview;
