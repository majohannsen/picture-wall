interface Picture {
  url: string;
  orientation: "horizontal" | "vertical";
  position: {
    x: number;
    y: number;
  };
  description?: string;
}
const gap = 1.5;
const pictures: Picture[] = [
  {
    url: "20210711_132226.jpg",
    orientation: "horizontal",
    position: { x: 5 + 1 * gap, y: 45 + 3 * gap },
  },
  {
    url: "20210713_140817.jpg",
    orientation: "horizontal",
    position: { x: 60 + 5 * gap, y: 30 + 2 * gap },
  },
  {
    url: "20210715_131706.jpg",
    orientation: "horizontal",
    position: { x: 100 + 8 * gap, y: 35 + 2 * gap },
  },
  {
    url: "20210716_104817.jpg",
    orientation: "horizontal",
    position: { x: 45 + 4 * gap, y: 45 + 3 * gap },
  },
  {
    url: "20210717_125115.jpg",
    orientation: "vertical",
    position: { x: 75 + 6 * gap, y: 70 + 5 * gap },
  },
  {
    url: "20210717_140048.jpg",
    orientation: "horizontal",
    position: { x: 100 + 8 * gap, y: 10 + 0 * gap },
  },
  {
    url: "1700825711203.jpg",
    orientation: "horizontal",
    position: { x: 50 + 4 * gap, y: 55 + 4 * gap },
  },
  {
    url: "IMG_2202.JPG",
    orientation: "horizontal",
    position: { x: 20 + 2 * gap, y: 45 + 3 * gap },
  },
  {
    url: "IMG_2233.JPG",
    orientation: "horizontal",
    position: { x: 125 + 10 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG_2267.JPG",
    orientation: "horizontal",
    position: { x: 135 + 11 * gap, y: 15 + 1 * gap },
  },
  {
    url: "IMG_2280.JPG",
    orientation: "horizontal",
    position: { x: 35 + 3 * gap, y: 10 + 0 * gap },
  },
  {
    url: "IMG_2323.JPG",
    orientation: "vertical",
    position: { x: 110 + 9 * gap, y: 60 + 4 * gap },
  },
  {
    url: "IMG_2402.JPG",
    orientation: "vertical",
    position: { x: 15 + 1 * gap, y: 30 + 2 * gap },
    description: "19.7.2021 - Burano",
  },
  {
    url: "IMG_2409.JPG",
    orientation: "vertical",
    position: { x: 140 + 11 * gap, y: 25 + 2 * gap },
    description: "19.7.2021 - Burano",
  },
  {
    url: "IMG_20210404_124224.jpg",
    orientation: "vertical",
    position: { x: 5 + 0 * gap, y: 20 + 1 * gap },
    description: "4.4.2021 - Ostern, bei Lochau",
  },
  {
    url: "IMG_20210619_222145.jpg",
    orientation: "vertical",
    position: { x: 115 + 9 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG_20210619_222501.jpg",
    orientation: "vertical",
    position: { x: 50 + 4 * gap, y: 65 + 5 * gap },
  },
  {
    url: "IMG_20210625_110639.jpg",
    orientation: "vertical",
    position: { x: 125 + 10 * gap, y: 15 + 1 * gap },
  },
  {
    url: "IMG_20210712_125942.jpg",
    orientation: "vertical",
    position: { x: 100 + 8 * gap, y: 55 + 4 * gap },
  },
  {
    url: "IMG_20211015_134730.jpg",
    orientation: "vertical",
    position: { x: 50 + 4 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG_20211129_123400.jpg",
    orientation: "horizontal",
    position: { x: 75 + 6 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG_20211203_154725.jpg",
    orientation: "horizontal",
    position: { x: 25 + 2 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG_20220916_174218.jpg",
    orientation: "vertical",
    position: { x: 175 + 14 * gap, y: 10 + 0 * gap },
  },
  {
    url: "IMG_20230803_195232569.jpg",
    orientation: "vertical",
    position: { x: 165 + 13 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG_20230805_225441957.jpg",
    orientation: "vertical",
    position: { x: 75 + 6 * gap, y: 5 + 0 * gap },
    description: "5.8.2023 - Szene",
  },
  {
    url: "IMG_20230815_195142857.jpg",
    orientation: "vertical",
    position: { x: 85 + 7 * gap, y: 0 + 0 * gap },
  },
  {
    url: "IMG_20230816_192406.jpg",
    orientation: "vertical",
    position: { x: 110 + 9 * gap, y: 45 + 3 * gap },
  },
  {
    url: "IMG_20230908_161946.jpg",
    orientation: "vertical",
    position: { x: 150 + 12 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG_20230922_185136.jpg",
    orientation: "vertical",
    position: { x: 115 + 9 * gap, y: 30 + 2 * gap },
  },
  {
    url: "IMG_20230928_172411.jpg",
    orientation: "vertical",
    position: { x: 40 + 3 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG_20231008_011215.jpg",
    orientation: "vertical",
    position: { x: 25 + 2 * gap, y: 55 + 4 * gap },
  },
  {
    url: "IMG_20231118_221722.jpg",
    orientation: "vertical",
    position: { x: 25 + 2 * gap, y: 30 + 2 * gap },
    description: "18.11.2023 - Soufs Geburtstag in ihrer alten Wohnung",
  },
  {
    url: "IMG_20231118_221727.jpg",
    orientation: "vertical",
    position: { x: 90 + 7 * gap, y: 15 + 1 * gap },
    description: "18.11.2023 - Soufs Geburtstag in ihrer alten Wohnung",
  },
  {
    url: "IMG-20170330-WA0000.jpg",
    orientation: "horizontal",
    position: { x: 95 + 8 * gap, y: 70 + 5 * gap },
  },
  {
    url: "IMG-20220122-WA0008.jpg",
    orientation: "vertical",
    position: { x: 35 + 3 * gap, y: 45 + 3 * gap },
  },
  {
    url: "IMG-20221030-WA0019.jpg",
    orientation: "horizontal",
    position: { x: 160 + 13 * gap, y: 10 + 0 * gap },
  },
  {
    url: "IMG-20230702-WA0009.jpg",
    orientation: "horizontal",
    position: { x: 125 + 10 * gap, y: 30 + 2 * gap },
  },
  {
    url: "IMG-20230702-WA0016.jpg",
    orientation: "vertical",
    position: { x: 140 + 11 * gap, y: 0 + 0 * gap },
  },
  {
    url: "IMG-20230708-WA0003.jpg",
    orientation: "vertical",
    position: { x: 65 + 5 * gap, y: 15 + 1 * gap },
  },
  {
    url: "IMG-20230929-WA0003.jpg",
    orientation: "vertical",
    position: { x: 25 + 2 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG-20231008-WA0001.jpg",
    orientation: "horizontal",
    position: { x: 60 + 5 * gap, y: 5 + 0 * gap },
  },
  {
    url: "IMG-20231008-WA0002.jpg",
    orientation: "horizontal",
    position: { x: 110 + 9 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG-20231010-WA0000.jpg",
    orientation: "horizontal",
    position: { x: 85 + 7 * gap, y: 30 + 2 * gap },
  },
  {
    url: "IMG-20231022-WA0004.jpg",
    orientation: "vertical",
    position: { x: 15 + 1 * gap, y: 15 + 1 * gap },
  },
  {
    url: "IMG-20231026-WA0001.jpg",
    orientation: "horizontal",
    position: { x: 10 + 1 * gap, y: 55 + 4 * gap },
  },
  {
    url: "IMG-20231027-WA0024.jpg",
    orientation: "horizontal",
    position: { x: 85 + 7 * gap, y: 80 + 6 * gap },
  },
  {
    url: "IMG-20231028-WA0000.jpg",
    orientation: "horizontal",
    position: { x: 95 + 8 * gap, y: 45 + 3 * gap },
  },
  {
    url: "IMG-20231104-WA0017.jpg",
    orientation: "vertical",
    position: { x: 100 + 8 * gap, y: 20 + 1 * gap },
  },
  {
    url: "IMG-20231109-WA0004.jpg",
    orientation: "horizontal",
    position: { x: 60 + 5 * gap, y: 70 + 5 * gap },
  },
  {
    url: "IMG-20231114-WA0016.jpg",
    orientation: "horizontal",
    position: { x: 0 + 0 * gap, y: 35 + 2 * gap },
    description: "14.11.2023 - Thalia Wien Mahü",
  },
  {
    url: "IMG-20231127-WA0038.jpg",
    orientation: "horizontal",
    position: { x: 35 + 3 * gap, y: 35 + 2 * gap },
  },
  {
    url: "PXL_20220909_142553829.jpg",
    orientation: "horizontal",
    position: { x: 50 + 4 * gap, y: 20 + 1 * gap },
  },
  {
    url: "PXL_20220909_214624040.jpg",
    orientation: "horizontal",
    position: { x: 35 + 3 * gap, y: 60 + 4 * gap },
  },
  {
    url: "PXL_20220910_155507131.jpg",
    orientation: "vertical",
    position: { x: 50 + 4 * gap, y: 30 + 2 * gap },
  },
  {
    url: "PXL_20230805_132247059.MP.jpg",
    orientation: "horizontal",
    position: { x: 150 + 12 * gap, y: 20 + 1 * gap },
    description: "5.8.2023 - Szene",
  },
  {
    url: "WhatsApp Image 2024-10-09 at 19.03.04.jpeg",
    orientation: "vertical",
    position: { x: 65 + 5 * gap, y: 55 + 4 * gap },
  },
  {
    url: "WhatsApp Image 2024-10-09 at 19.03.32.jpeg",
    orientation: "horizontal",
    position: { x: 85 + 7 * gap, y: 55 + 4 * gap },
  },
  {
    url: "WhatsApp Image 2024-10-09 at 19.04.33.jpeg",
    orientation: "vertical",
    position: { x: 75 + 6 * gap, y: 30 + 2 * gap },
  },
  {
    url: "WhatsApp Image 2024-10-09 at 19.07.20.jpeg",
    orientation: "vertical",
    position: { x: 85 + 7 * gap, y: 65 + 5 * gap },
  },
  {
    url: "WhatsApp Image 2024-10-09 at 19.07.42.jpeg",
    orientation: "vertical",
    position: { x: 85 + 7 * gap, y: 40 + 3 * gap },
  },
  // {
  //   url: "public",
  //   orientation: "vertical",
  //   position: { x: 0 + 0 * gap, y: 0 + 0 * gap },
  // },
];

export default pictures;
