interface Picture {
  url: string;
  orientation: "horizontal" | "vertical";
  position: {
    x: number;
    y: number;
  };
}
const pictures: Picture[] = [
  {
    url: "20210711_132226.jpg",
    orientation: "horizontal",
    position: { x: 5, y: 51 },
  },
  {
    url: "20210713_140817.jpg",
    orientation: "horizontal",
    position: { x: 70, y: 34 },
  },
  {
    url: "20210715_131706.jpg",
    orientation: "horizontal",
    position: { x: 116, y: 39 },
  },
  {
    url: "20210716_104817.jpg",
    orientation: "horizontal",
    position: { x: 53, y: 56 },
  },
];

export default pictures;
