const nama = document.querySelector(".nama");
const b = document.querySelector(".b");
const p = document.querySelector("p");

let data = ["Aditya"]:
b.addEventListener("click",() => {
  data.push(nama.value);
});
p.innerHTML += data;
