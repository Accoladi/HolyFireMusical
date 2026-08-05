export type StoryPageData = {
  id: string;
  background: string;
  align: "left" | "right";
  paragraphs: string[];
};

const lookBookImage = (filename: string) =>
  `/images/Holy Fire Look-Book II/${filename}`;

const characterImage = (filename: string) => `/images/characters/${filename}`;

const quinnPerezImage = (filename: string) => `/images/Quinn_Perez/${filename}`;

export const storyPages: StoryPageData[] = [
  {
    id: "page-1",
    background: lookBookImage(
      "Page One - Nashville Street Scene - Lower Broadway.png",
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
      "In this Nashville,",
      "country queens and politicians,\nbeauty queens, preachers,\nand reporters—",
      "mothers and daughters,\nfriends and enemies—",
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
    background: lookBookImage("Page Nine - Holy Fire Convention on Stage.png"),
    align: "left",
    paragraphs: [
      "A stage can change the world.",
      "And stolen crystal shoes\ncan turn the impossible\ninto a miracle.",
    ],
  },
  {
    id: "page-10",
    background: lookBookImage("Page Ten - Holy Fire Convention at Stadium.png"),
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
  {
    id: "page-13",
    background: "/images/vendetta_page.png",
    align: "right",
    paragraphs: [
      "I’m Vendetta—\nVendetta Armistead.",
      "This diner is The Pickle Jar.",
      "And, yes, I own it.",
      "I’m also Chief Justice\nof the Tennessee Supreme Court,",
      "with a psychology degree\nfrom the University of Tennessee.",
      "So everyone who walks into\nthis old-fashioned meat-and-three\nbecomes a case study.",
      "And believe me—\nthey’re characters.",
      "It’s about time you met them.",
    ],
  },
  {
    id: "page-14",
    background: "/images/vendetta_page_2.png",
    align: "right",
    paragraphs: [
      "People come to\nThe Pickle Jar\nfor my banana pudding.",
      "It’s Great-Aunt\nMaddie Ruth’s recipe,\nserved from six\nuntil eleven.",
      "My best friend Wyvette\nand her Governor husband\nbring everyone.",
      "Last week—a parade:\neight Southern Governors.",
      "Texas was a fool.",
      "Florida?\nI’d marry him.",
    ],
  },
  {
    id: "page-15",
    background: characterImage("Wyvette_love.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-16",
    background: characterImage("Luther_Hennessee.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-17",
    background: characterImage("Tiffany_Dwan.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-18",
    background: characterImage("Jack_Reed.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-19",
    background: characterImage("Maggie_Love.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-20",
    background: characterImage("Jesse_David_Armistead.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-21",
    background: characterImage("Vendetta_Armistead.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-22",
    background: characterImage("Quinn_Perez.png"),
    align: "left",
    paragraphs: [],
  },
  {
    id: "page-23",
    background: quinnPerezImage("quinn_pereze_1.png"),
    align: "left",
    paragraphs: [
      "I’m Quinn Perez,\nstanding in the lobby\nof Nashville’s legendary\nHermitage Hotel.",
      "I’m the lead investigative reporter\nfor Counterpoint News\nin New York City.",
      "I’ve won three Peabody Awards.",
      "And when my Nashville exposé—\nHoly Fire: The Tell-All Special—\nairs tomorrow night,\nI expect it may earn me a fourth.",
      "Perhaps even a Pulitzer Prize\nfor Investigative Reporting.",
    ],
  },
  {
    id: "page-24",
    background: quinnPerezImage("quinn_pereze_2.png"),
    align: "right",
    paragraphs: [
      "But this story is more than\nanother investigation.",
      "For me, it’s personal.",
      "It is fascinating, unsettling,\nand filled with secrets—",
      "with a final revelation\neven I could never\nhave predicted.",
    ],
  },
  {
    id: "page-25",
    background: quinnPerezImage("quinn_pereze_3.png"),
    align: "left",
    paragraphs: [
      "I like you.\nAnd I trust you.",
      "I’ve had a few too many\ncelebratory drinks,\nso I need to excuse myself\nto the Kennedy-Elvis-Hoffa\nMen’s Room.",
      "While I’m gone,\nstep around the desk\nand read the opening\nto my Special.",
      "But don’t share with CBS, NBC,\nCNN, or—heaven forbid—FOX.",
      "Otherwise,\nwe can no longer be friends.",
    ],
  },
  {
    id: "page-26",
    background: quinnPerezImage("quinn_pereze_4.png"),
    align: "left",
    paragraphs: [],
  },
];
