import type { ComponentProps } from "react";
import type { HeadlineWithId, Meme } from "../../../types/data";
import { Loading } from "../../atoms/Loading";
import { Headline } from "../../atoms/Headline";
import classes from "./MemePreview.module.css";

type MemePreviewProps = ComponentProps<"div"> & {
  currentMeme: Meme | undefined;
  headlines: HeadlineWithId[];
};

export function MemePreview({
  className = "",
  currentMeme,
  headlines,
  ...props
}: Readonly<MemePreviewProps>) {
  return (
    <div {...props} className={`${classes.preview} ${className}`}>
      {currentMeme === undefined ? (
        <Loading />
      ) : (
        <img
          alt={currentMeme.name}
          className={classes["preview-meme"]}
          src={currentMeme.url}
        />
      )}
      {headlines.map(({ fontSize, id, posX, posY, text }) => (
        <Headline
          className={classes["preview-headline"]}
          data-x={posX}
          data-y={posY}
          key={id}
          /* eslint-disable-next-line @typescript-eslint/no-magic-numbers -- fontSize is in percent
           */
          style={{ "--font-scale": fontSize / 100 }}
          text={text}
        />
      ))}
    </div>
  );
}
