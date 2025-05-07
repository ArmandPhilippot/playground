import { useHeadlines } from "../../../hooks/use-headlines";
import { useMemes } from "../../../hooks/use-memes";
import { CONFIG } from "../../../utils/constants";
import { Colophon } from "../../atoms/Colophon";
import { Heading } from "../../atoms/Heading";
import { MemePreviewPane } from "../../organisms/MemePreviewPane";
import { MemeSettingsPane } from "../../organisms/MemeSettingsPane";
import classes from "./Layout.module.css";

export function Layout() {
  const maxHeadlines = 4;
  const defaultMemeIdx = 5;
  const { currentMeme, getRandomMeme } = useMemes(defaultMemeIdx);
  const { addHeadline, headlines, removeHeadline, updateHeadline } =
    useHeadlines();

  return (
    <>
      <header className={classes.header}>
        <Heading as="h1">{CONFIG.brand}</Heading>
      </header>
      <main className={classes.main}>
        <MemePreviewPane
          currentMeme={currentMeme}
          headlines={headlines}
          onGetRandomMeme={getRandomMeme}
        />
        <MemeSettingsPane
          headlines={headlines}
          maxHeadlines={maxHeadlines}
          onDeleteHeading={removeHeadline}
          onNewHeadline={addHeadline}
          onSettingChange={updateHeadline}
        />
      </main>
      <footer className={classes.footer}>
        <Colophon
          brand={CONFIG.brand}
          copyrightOwner={CONFIG.author}
          copyrightYears={CONFIG.copyrightYear}
          license={CONFIG.license}
        />
      </footer>
    </>
  );
}
