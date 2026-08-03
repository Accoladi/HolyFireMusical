export type StoryPageData = {
  id: string;
  background: string;
  align: "left" | "right";
  paragraphs: string[];
};

export const storyPages: StoryPageData[] = [
  {
    id: "page-1",
    background: "/images/page1-bg.png",
    align: "left",
    paragraphs: [
      "There is a Nashville\nin the American South.",
      "There is a Nashville sound\ncarried across the world.",
      "There is a Nashville look—\non stages and television screens,\nin postcards and late-night shows.",
      "But there are really\ntwo Nashvilles:",
      "The one on the map.",
      "And the one\nin your imagination",
    ],
  },
  {
    id: "page-2",
    background: "/images/page2-bg.png",
    align: "left",
    paragraphs: [
      "In this Nashville,\ncountry queens and kingmakers,\npoliticians and beauty queens,\npreachers and reporters,\nmothers and daughters,\nfriends and enemies\nall wander through the same\nAmerican fairytale.",
      "At first, its heroes and villains\nseem larger than life.",
      "But stay awhile,\nand they become something more:",
      "People.",
      "People trying\nto make their dreams come true.",
    ],
  },
  {
    id: "page-3",
    background: "/images/page3-bg.png",
    align: "right",
    paragraphs: [
      "In this Nashville,\ndreams make their own rules.",
      "In dreams,\na child can wake you.",
      "A bridge can carry you\nsomewhere you have never been.",
      "A stage can change the world.",
      "And a borrowed shoe\ncan create a miracle.",
      "For one extraordinary week,\nthat is exactly what happens\nin Nashville.",
      "Not the Nashville on the map.\nThe one in our hearts.",
    ],
  },
];
