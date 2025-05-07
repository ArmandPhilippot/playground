import { useCallback, useState } from "react";
import type { Headline, HeadlineWithId } from "../types/data";

let nextId = 0;

const incrementId = () => {
  nextId = nextId + 1;
};

const addIdToHeadlines = (headlines: Headline[]): HeadlineWithId[] => {
  incrementId();

  return headlines.map((headline) => {
    return { ...headline, id: `headline-${nextId}` };
  });
};

const defaultHeadline = {
  fontSize: 12,
  posX: "left",
  posY: "top",
  text: "Edit here...",
} as const;

export function useHeadlines(initialHeadlines?: Headline[]) {
  const [headlines, setHeadlines] = useState<HeadlineWithId[]>(
    addIdToHeadlines(initialHeadlines ?? [defaultHeadline])
  );

  const addHeadline = useCallback(() => {
    incrementId();
    setHeadlines((prevHeadlines) => [
      ...prevHeadlines,
      { ...defaultHeadline, id: `headline-${nextId}` },
    ]);
  }, []);

  const removeHeadline = useCallback((id: string) => {
    setHeadlines((prevHeadlines) =>
      prevHeadlines.filter((headline) => headline.id !== id)
    );
  }, []);

  const updateHeadline = useCallback((id: string, data: Headline) => {
    setHeadlines((prevHeadlines) =>
      prevHeadlines.map((headline) => {
        if (headline.id !== id) return headline;

        return {
          ...headline,
          ...data,
        };
      })
    );
  }, []);

  return { headlines, addHeadline, removeHeadline, updateHeadline };
}
