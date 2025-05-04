import { useState } from "react";
import MemeForm from "../MemeForm/MemeForm";
import MemePreview from "../MemePreview/MemePreview";
import type { HeadlineType } from "../Headline/Headline";

function Main() {
  const [headlines, setHeadlines] = useState<HeadlineType[]>([]);

  return (
    <main className="main">
      <MemePreview headlines={headlines} setHeadlines={setHeadlines} />
      <MemeForm headlines={headlines} setHeadlines={setHeadlines} />
    </main>
  );
}

export default Main;
