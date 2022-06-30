const nama = document.querySelector(".nama");
const b = document.querySelector(".b");
const p = document.querySelector(".list");

let data = ["Aditya"];
p.innerHTML += data[data.length-1];
b.addEventListener("click",() => {
  data.push(nama.value);
  p.innerHTML += data[data.length-1];
});

