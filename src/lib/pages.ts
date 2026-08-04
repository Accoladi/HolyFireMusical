export type StoryPageData = {
  id: string;
  background: string;
  align: "left" | "right";
  paragraphs: string[];
};

const lookBookImage = (filename: string) =>
  `/images/Holy Fire Look-Book II/${filename}`;

export const storyPages: StoryPageData[] = [
  {
    id: "page-1",
    background: lookBookImage(
      "Page One - Nashville Street Scene - Lower Broadway.png"
    ),
    align: "left",
    paragraphs: [
      "There is a Nashville\nin the American South.",
      "A city of streets,\nstages, studios,",
      "churches,\nand songs.",
    ],
  },
  {
    id: "page-2",
    background: lookBookImage("Page Two - Young Wyvette and Maggie.png"),
    align: "left",
    paragraphs: [
      "There is a Nashville",
      "where dreamers arrive\nwith songs written on paper napkins,\npickup-truck sing-along voices,",
      "and just enough courage\nto believe",
      "they might be heard.",
    ],
  },
  {
    id: "page-3",
    background: lookBookImage("Page Three - Wyvette Singing at the Opry.png"),
    align: "right",
    paragraphs: [
      "There is a Nashville sound\nthat travels far beyond the city—\nfrom the stage of the Grand Ole Opry\nto radios around the world.",
      "And there is a Nashville look—\nglowing beneath stage lights,\nflickering across television screens.",
    ],
  },
  {
    id: "page-4",
    background: lookBookImage("Page Four - Tour Bus of Nashville.png"),
    align: "left",
    paragraphs: [
      "There is a Nashville\nwhere visitors come\nsearching for traces of legends—\nthe homes where they lived,\nthe stages where stars were born,\nand a little of the magic\nthey left behind.",
      "But not everything that shines\ntells the whole story.",
    ],
  },
  {
    id: "page-5",
    background: lookBookImage("Page Five - Maggie Comes to Nashville.png"),
    align: "left",
    paragraphs: [
      "But there are really\ntwo Nashvilles:",
      "The one\nyou can find on a map.",
      "And the one\nyou can only find\nin your imagination.",
    ],
  },
  {
    id: "page-6",
    background: lookBookImage("Page Six - Football throw at Capital.png"),
    align: "left",
    paragraphs: [
      "In this Nashville,\ncountry queens and beauty queens,\nkingmakers and politicians,\npreachers and reporters,\nmothers and daughters,\nfriends and enemies",
      "cross paths\nand wander together\nthrough the same\nAmerican fairytale.",
    ],
  },
  {
    id: "page-7",
    background: lookBookImage("Page Seven - Family at Mansion.png"),
    align: "left",
    paragraphs: [
      "At first,\nits heroes and villains\nseem larger than life.",
      "But stay awhile,\nand they become\nsomething more:",
      "People.",
      "People reaching, risking,\nand holding on\nto the dreams\nthat brought them here.",
    ],
  },
  {
    id: "page-8",
    background: lookBookImage("Page Eight - Maggie at Bridge.png"),
    align: "right",
    paragraphs: [
      "In this Nashville,\ndreams make their own rules.",
      "A child can wake you.",
      "A bridge can carry you\nsomewhere you have never been.",
    ],
  },
  {
    id: "page-9",
    background: lookBookImage(
      "Page Nine - Holy Fire Convention on Stage.png"
    ),
    align: "left",
    paragraphs: [
      "A stage can change the world.",
      "And stolen crystal shoes\ncan turn the impossible\ninto a miracle.",
    ],
  },
  {
    id: "page-10",
    background: lookBookImage(
      "Page Ten - Holy Fire Convention at Stadium.png"
    ),
    align: "left",
    paragraphs: [
      "For one extraordinary week,\nthe Nashville of imagination\nbecomes real.",
    ],
  },
  {
    id: "page-11",
    background: lookBookImage("Page Eleven - Street Singer.png"),
    align: "right",
    paragraphs: ["Not the city\nmeasured in streets,\nsongs,\nor singers—"],
  },
  {
    id: "page-12",
    background: lookBookImage("Page Twelve - Closing Pic under logo.png"),
    align: "left",
    paragraphs: [
      "Not the Nashville\nmarked on a map—",
      "but the Nashville\nwe carry\nin our hearts.",
    ],
  },
];
