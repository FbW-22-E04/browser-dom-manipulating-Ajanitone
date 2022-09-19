"strict";

const html = document.querySelector("html");
const body = document.querySelector("body");
//const heading = document.querySelector("title");
//const main = document.querySelector("main");

html.style.fontSize = "62.5%";

body.style.fontFamily = "Tahoma";
//Create a personalized book website! Instead of adding all of the details of books in HTML, add data on the page from the `books` array in `index.js` using JavaScript.

const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// Colorgenerator
const colorGenerator = () => {
  const clr1 = Math.floor(Math.random() * 254 + 1);
  const clr2 = Math.floor(Math.random() * 254 + 1);
  const clr3 = Math.floor(Math.random() * 254 + 1);
  const trans = Math.random().toFixed(1);
  //   console.log(trans);
  return `rgba(${clr1},${clr2},${clr3},${trans})`;
};

// Create Booklist with class

// H1 styling

const h1 = document.querySelector("h1");

h1.classList.toggle("mb-4", "fs-1", "fw-bold", "h1");

const bookList = document.querySelector(".book-list");

// Create a loop to make listItems

for (let i = 0; i < 4; i++) {
  const listItem = document.createElement("li");

  bookList.appendChild(listItem);
}

// Create a variable of listItems
const li = document.querySelectorAll("li");

// A loop to style each listItem

li.forEach((el) => {
  el.style.height = "20rem";
  el.style.width = "15rem";
  el.style.border = "2px solid gold";
  el.style.listStyle = "none";
});

// A loop to create an instances tag in each listItem
li.forEach((el) => {
  const img = document.createElement("img");

  el.appendChild(img);

  const h2 = document.createElement("h2");

  el.appendChild(h2);

  const h3 = document.createElement("h3");

  el.appendChild(h3);

  const btn = document.createElement("btn");

  el.appendChild(btn);
});

// create a variable for each img tag
const image = document.querySelectorAll("img");

// Adding src Atrribute to img tag and directing it to sourceArray

image.forEach((el, i) => {
  el.setAttribute("src", `${books[i].img}`);
  el.style.width = "100%";
  el.style.height = "100%";
});

// Create a variable for each h2 tag
const h2 = document.querySelectorAll("h2");

// Adding content and styling to h2

h2.forEach((el, i) => {
  el.textContent = `${books[i].title}`;
  // el.style.backgroundColor = colorGenerator();

  el.classList.add(
    ".text-center",
    "p-3",
    "fs-2",
    "fw-normal",
    "text-secondary",
    "border"
  );
});

// Create a variable for each h3 tag

const h3 = document.querySelectorAll("h3");

h3.forEach((el, i) => {
  el.textContent = `${books[i].author}`;
  el.classList.add(
    ".text-center",
    "p-3",
    ".fs-1",
    "fw-normal",

    "text-danger"
  );
  el.style.color;
});

// Create a variable for each button

const btn = document.querySelectorAll("btn");

btn.forEach((el, i) => {
  el.textContent = `${books[i].alreadyRead}`;
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.width = "50%";
  el.classList.add(
    "btn",
    "btn-success",
    "btn-box-shadow-4",
    "p-4",
    "fs-2",
    "mx-5",
    "rounded-pill"
  );

  if (i % 2 === 1) {
    el.style.backgroundColor = "grey";
    el.textContent = "ToRead";
    el.classList.add("p-4");
  } else {
    el.textContent = "Read";
  }
});

const h3Name1 = document.querySelectorAll("h3")[1].classList.toggle("mt-5");
const h3Name2 = document.querySelectorAll("h3")[2].classList.toggle("mt-5");
const button = document.querySelectorAll("btn")[1].classList.add("mt-3");

const button2 = document.querySelectorAll("btn")[2].classList.add("mt-3");
