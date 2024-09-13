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

// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻
// CREAZIONE MAIN 👍🏻

let leftDiv = document.getElementById("left_div");

let mainContent = [
  {
    pic: "",
    author: "Robert Roy Britt",
    title: "How Old is Old?",
    sinossi: "What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age",
    date: "Oct 27 ·&nbsp;",
    readTime: "&nbsp;5 min read ·&nbsp;",
    mainImage: "",
    category: "Aging"
  },
  {
    pic: "",
    author: "Taru Anniina Liikanen",
    title: "Is Taylor Swift Allowed to Speak About Fat?",
    sinossi: "Can you speak about your trauma if you don't look traumatized?",
    date: "Oct 24 ·&nbsp;",
    readTime: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Health"
  },
  {
    pic: "",
    author: "David Rodenas, Ph. D.",
    title: "Don’t Screw Up, You Will Be Found Guilty",
    sinossi: "Software Engineer, yours is the right to produce high-quality work at all times, also the liability.",
    date: "Oct 15 ·&nbsp;",
    readTime: "&nbsp;5 min read ·&nbsp;",
    mainImage: "",
    category: "Software Engineering"
  },
  {
    pic: "",
    author: "Microsoft Design",
    title: "Leave No Trace",
    sinossi: "How product designers can break from the status quo and help our planet",
    date: "Oct 25 ·&nbsp;",
    readTime: "&nbsp;11 min read ·&nbsp;",
    mainImage: "",
    category: "Sustanbility"
  },
  {
    pic: "",
    author: "Scott H. Young",
    title: "Variability, Not Repetition, is the Key to Mastery",
    sinossi: "Bruce Lee is reported to have said, “I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000...",
    date: "Oct 26 ·&nbsp;",
    readTime: "&nbsp;7 min read ·&nbsp;",
    mainImage: "",
    category: "Learning"
  },
  {
    pic: "",
    author: "Paul A. DeStefanoin Human Parts",
    title: "What I Overheard as an Escape Room Actor",
    sinossi: "Lock a group of people in a room and you’ll witness some surprising confessions",
    date: "Jan 18 ·&nbsp;",
    readTime: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Experiences"
  },
  {
    pic: "",
    author: "Kim Scott",
    title: "6 Steps for Setting Measurable Goals to Avoid “Productivity Paranoia”",
    sinossi: "With more people working in remote and hybrid environments than ever before, company, team and individual goals must be explicit and…",
    date: "Oct 24 ·&nbsp;",
    readTime: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Productivity"
  }
];

for (let i = 0; i < mainContent.length; i++) {
  mainContent[i].pic = `./assets/imgs/image${i + 7}.jpeg`;
  mainContent[i].mainImage = `./assets/imgs/image${i + 8}.jpeg`;
}

let creation = function (pic, author, sinossi, title, date, readTimeParameter, category, bookImage) {
  let leftSectionCard = document.createElement("div");
  leftSectionCard.className = "left_section_card";

  let leftBlock = document.createElement("div");
  leftBlock.className = "left_block";

  let leftSectionCardAuthor = document.createElement("div");
  leftSectionCardAuthor.className = "left_section_card_author";

  let authorImage = document.createElement("img");
  authorImage.src = pic;
  authorImage.alt = "author_image";
  authorImage.className = "author_image";

  let authorName = document.createElement("h6");
  authorName.innerText = author;

  // _______________________________________
  let titleBook = document.createElement("h2");
  titleBook.innerText = title;
  // _______________________________________
  let sinox = document.createElement("p");
  sinox.innerText = sinossi;
  // _______________________________________
  let leftSectionCardInfo = document.createElement("div");
  leftSectionCardInfo.className = "left_section_card_info";

  let dateInfo = document.createElement("p");
  dateInfo.innerText = date;

  let readTimeText = document.createElement("p");
  readTimeText.innerText = readTimeParameter;

  let categoryButton = document.createElement("div");
  categoryButton.className = "category_button";
  categoryButton.innerText = category;

  let star = document.createElement("img");
  star.src = "./assets/imgs/svg/star.svg";
  star.alt = "star image";

  let bookmark = document.createElement("img");
  bookmark.src = "./assets/imgs/svg/bookmark.svg";
  bookmark.alt = "bookmark";
  bookmark.className = "bookmark";

  let bookImageInner = document.createElement("img");
  bookImageInner.src = bookImage;
  bookImageInner.alt = "book image";
  bookImageInner.className = "left_author_image";

  // append tutto

  leftSectionCardAuthor.append(authorImage, authorName);
  leftSectionCardInfo.append(dateInfo, readTimeText, categoryButton, star);
  leftBlock.append(leftSectionCardAuthor, titleBook, sinox, leftSectionCardInfo);
  leftSectionCard.append(leftBlock, bookmark, bookImageInner);
  leftDiv.appendChild(leftSectionCard);
};

window.onload = function () {
  // CREAZIONE HEADER
  for (let i = 0; i < trendingCard.length; i++) {
    cardCreation(trendingCard[i].num, trendingCard[i].img, trendingCard[i].name, trendingCard[i].title, trendingCard[i].published, trendingCard[i].read);
  }
  // CREAZIONE MAIN
  for (let i = 0; i < mainContent.length; i++) {
    creation(
      mainContent[i].pic,
      mainContent[i].author,
      mainContent[i].sinossi,
      mainContent[i].title,
      mainContent[i].date,
      mainContent[i].readTime,
      mainContent[i].category,
      mainContent[i].mainImage
    );
  }

  let nav = document.querySelector("nav");
  let rightSection = document.getElementById("right_section");
  let rightSectionInitialOffset = rightSection.offsetTop; // Posizione iniziale della sezione destra
  let navHeight = nav.offsetHeight; // Altezza della nav
  let main = document.querySelector("main");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Controllo per la navbar
    if (scrollPosition > 100) {
      nav.classList.remove("top");
      nav.classList.add("scroll_nav");
    } else {
      nav.classList.remove("scroll_nav");
      nav.classList.add("top");
    }

    // Controllo per la sezione destra: diventa fixed quando tocca la nav
    if (scrollPosition >= rightSectionInitialOffset - navHeight) {
      rightSection.classList.add("fixed-right");
      main.classList.add("main_start");
    } else {
      rightSection.classList.remove("fixed-right");
      main.classList.remove("main_start");
    }
  });
};
