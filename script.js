// in questo array ci sono 6 elementi ma chiaramente sarà dinamico e ogni informazione che ora ho scritto a mano
// verrà generata dinamicamente

let trendingCard = [
  {
    num: "",
    img: "",
    name: "Tom Cooper",
    title: "Ukraine War, 23 October 2022",
    published: "Oct 23",
    read: " · 5 in read"
  },
  {
    num: "",
    img: "",
    name: "Arthur Hayes in Entrepreneur's Handbook",
    title: "Comeback",
    published: "Oct 26",
    read: " · 24 min read"
  },
  {
    num: "",
    img: "",
    name: "Tom Cooper",
    title: "How I Learned to Love My Breasts Even Though One Is A Horcrux For Voldemort",
    published: "Oct 26",
    read: " · 2 min read"
  },
  {
    num: "",
    img: "",
    name: "Frank Mastropolo in The Riffk",
    title: "The Night Paul McCartney Donned a Disguise at Fillmore East",
    published: "Oct 22",
    read: " · 3min read"
  },
  {
    num: "",
    img: "",
    name: "Frank Andrade in Towards Data Science",
    title: "5 Python Projects to Automate Your Life: From Beginner to Advanced",
    published: "Oct 13",
    read: " · 6min read"
  },
  {
    num: "",
    img: "",
    name: "Wesley Smits in JavaScript in Plain English",
    title: "How To Make Visual Studio Code Look Amazing",
    published: "Oct 20",
    read: " · 6min read"
  }
];

for (let i = 0; i < trendingCard.length; i++) {
  trendingCard[i].num = "0" + (i + 1);
  trendingCard[i].img = `./assets/imgs/image${i + 1}.jpeg`;
}

let aside = document.querySelector("aside")
window.onload(function {

})