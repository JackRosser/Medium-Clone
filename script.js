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
  trendingCard[i].img = `./assets/imgs/image0${i + 1}.png`;
}

let cardBox = document.getElementById("cards__box");

let cardCreation = function (indexNum, indexImg, indexName, indexTitle, indexDate, indexRead) {
  //_______________________________________________________________
  let trendingCardBox = document.createElement("div");
  trendingCardBox.className = "trending_card";
  //_______________________________________________________________
  let cardNum = document.createElement("div");
  cardNum.className = "trending_card_num";
  cardNum.innerText = indexNum;
  //_______________________________________________________________
  let informationsBox = document.createElement("div");
  informationsBox.className = "informations_box";
  let author = document.createElement("div");
  author.className = "author";
  let authorImg = document.createElement("img");
  authorImg.className = "author_image";
  authorImg.src = indexImg;
  authorImg.alt = `${indexName} image`;
  let authorName = document.createElement("p");
  authorName.innerText = indexName;
  //_______________________________________________________________
  let title = document.createElement("h4");
  title.innerText = indexTitle;
  //_______________________________________________________________
  let informations = document.createElement("div");
  informations.className = "informations";
  let date = document.createElement("p");
  date.innerText = indexDate;
  let read = document.createElement("p");
  read.innerText = indexRead;

  // UNIONE DI TUTTO

  informations.append(date, read);
  author.append(authorImg, authorName);
  informationsBox.append(author, title, informations);
  trendingCardBox.append(cardNum, informationsBox);
  cardBox.appendChild(trendingCardBox);
};

window.onload = function () {
  for (let i = 0; i < trendingCard.length; i++) {
    cardCreation(trendingCard[i].num, trendingCard[i].img, trendingCard[i].name, trendingCard[i].title, trendingCard[i].published, trendingCard[i].read);
  }
};
