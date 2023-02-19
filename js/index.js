let layout = document.querySelectorAll(".layout");
let box = document.querySelectorAll(".box");
let arrcolor = [
  "hsl(0, 100%, 67%)",
  "hsl(39, 100%, 56%)",
  "hsl(166, 100%, 37%)",
  "hsl(234, 85%, 45%)",
];
for (let i = 0; i < 4; i++) {
  layout[i].style.background = arrcolor[i];
}
let object = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
for (let i = 0; i < 4; i++) {
  box[i].innerHTML += `
    <img src="${object[i].icon}" alt=""/>
    <span class="category">${object[i].category}</span>
    <span class="count"><span class="number"> ${object[i].score} </span>/ 100</span>
    `;
}
let category = document.querySelectorAll(".category");
for (let i = 0; i < 4; i++) {
  category[i].style.color = arrcolor[i];
}
