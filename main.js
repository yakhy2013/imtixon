const input = document.querySelector("#i");
const btn = document.querySelector(".btn1");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputVal = input.value;

  if (inputVal.length < 5) {
    text.classList.toggle("ss");
  } else {
    addlist(inputVal);
  }

  input.value = "";
});

function addlist(data) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const text = document.createElement("p");

  img.src = "./delete.png";
  img.alt = "img";
  text.textContent = data;
  img.id = "del";

  li.addEventListener("click", () => {
    text.classList.toggle("line");
  });

  img.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.append(text, img);
  ul.appendChild(li);
}
