let trendingCard = [
  {
    num: "",
    img: "./assets/imgs/image01.jpeg",
    name: "Tom Cooper",
    title: "Ukraine War, 23 October 2022",
    published: "Oct 23",
    read: " · 5min read"
  }
];

for (let i = 0; i < trendingCard.length; i++) {
  trendingCard[i].num = "0" + (i + 1);
}

console.log(trendingCard[0].num);
