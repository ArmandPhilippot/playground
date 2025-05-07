import type { HEADLINE_POS_X, HEADLINE_POS_Y } from "../utils/constants";

export type Headline = {
  fontSize: number;
  posX: PosX;
  posY: PosY;
  text: string;
};

export type HeadlineWithId = Headline & {
  id: string;
};

/* @link https://api.imgflip.com/get_memes */
export type Meme = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  captions: number;
};

export type PosX = (typeof HEADLINE_POS_X)[number];

export type PosY = (typeof HEADLINE_POS_Y)[number];
