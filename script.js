const nama = document.querySelector(".nama");
const b = document.querySelector(".b");

let data = []:
b.addEventListener("click",() => {
  data.push(nama.value);
});
