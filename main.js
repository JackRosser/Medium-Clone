let leftSection = document.getElementById("left_section");

let mainContent = [
  {
    pic: "",
    author: "Robert Roy Britt",
    title: "How Old is Old?",
    sinossi: "What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age",
    date: "Oct 27 ·&nbsp;",
    read: "&nbsp;5 min read ·&nbsp;",
    mainImage: "",
    category: "Aging"
  },
  {
    pic: "",
    author: "Taru Anniina Liikanen",
    title: "Is Taylor Swift Allowed to Speak About Fat?",
    sinossi: "Can you speak about your trauma if you don't look traumatized?",
    date: "Oct 24 ·&nbsp;",
    read: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Health"
  },
  {
    pic: "",
    author: "David Rodenas, Ph. D.",
    title: "Don’t Screw Up, You Will Be Found Guilty",
    sinossi: "Software Engineer, yours is the right to produce high-quality work at all times, also the liability.",
    date: "Oct 15 ·&nbsp;",
    read: "&nbsp;5 min read ·&nbsp;",
    mainImage: "",
    category: "Software Engineering"
  },
  {
    pic: "",
    author: "Microsoft Design",
    title: "Leave No Trace",
    sinossi: "How product designers can break from the status quo and help our planet",
    date: "Oct 25 ·&nbsp;",
    read: "&nbsp;11 min read ·&nbsp;",
    mainImage: "",
    category: "Sustanbility"
  },
  {
    pic: "",
    author: "Scott H. Young",
    title: "Variability, Not Repetition, is the Key to Mastery",
    sinossi: "Bruce Lee is reported to have said, “I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000...",
    date: "Oct 26 ·&nbsp;",
    read: "&nbsp;7 min read ·&nbsp;",
    mainImage: "",
    category: "Learning"
  },
  {
    pic: "",
    author: "Paul A. DeStefanoin Human Parts",
    title: "What I Overheard as an Escape Room Actor",
    sinossi: "Lock a group of people in a room and you’ll witness some surprising confessions",
    date: "Jan 18 ·&nbsp;",
    read: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Experiences"
  },
  {
    pic: "",
    author: "Kim Scott",
    title: "6 Steps for Setting Measurable Goals to Avoid “Productivity Paranoia”",
    sinossi: "With more people working in remote and hybrid environments than ever before, company, team and individual goals must be explicit and…",
    date: "Oct 24 ·&nbsp;",
    read: "&nbsp;6 min read ·&nbsp;",
    mainImage: "",
    category: "Productivity"
  }
];

for (let i = 0; i < mainContent.length; i++) {
  mainContent[i].pic = `./assets/imgs/image0${i + 7}.jpeg`;
  mainContent[i].mainImage = `./assets/imgs/image0${i + 8}.jpeg`;
}

let creation = function (pic, author, sinossi, title, date, read, category, bookImage) {
  let leftSectionCard = document.createElement("div");
  leftSectionCard.className = "left_section_card";

  let leftBlock = document.createElement("div");
  leftBlock.className = "left_section_card";

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

  let read = document.createElement("p");
  read.innerText = read;

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

  let bookImage = document.createElement("img");
  bookmark.src = bookImage;
  bookmark.alt = "book image";
  bookmark.className = "left_author_image";

  // append tutto

  leftSectionCardAuthor.append(authorImage, authorName);
  leftSectionCardInfo.append(dateInfo, read, categoryButton, star);
  leftBlock.append(leftSectionCardAuthor, titleBook, sinox, leftSectionCardInfo);
  leftSectionCard.append(leftBlock, bookmark, bookImage);
  leftSection.appendChild(leftSectionCard);
};
