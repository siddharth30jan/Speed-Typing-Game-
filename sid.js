const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
const title = document.getElementById("title");
const input = document.getElementById("input");

function generate() {
  fetch(RANDOM_QUOTE_API_URL)
    .then(res => res.json())
    .then(data => {
      // title.textContent = data.content;
      //Instead of the above
      let dataArray = data.content.split("");
      dataArray.forEach(x => {
        let temp = document.createElement("span");
        temp.innerText = x;
        title.appendChild(temp);
        // title.innerHTML += `<span>${x}</span>`;
      });
    });
}
generate();
input.addEventListener("input", () => {
  //console.log(input.value);
  let temp = input.value.split("");
  let spanArray = document.querySelectorAll("span");
  //console.log(spanArray);
  for (let x = 0; x < spanArray.length; x++) {
    if (!temp[x]) {
      spanArray[x].classList.remove("correct");
      spanArray[x].classList.remove("incorrect");
    } else if (spanArray[x].innerText == temp[x]) {
      spanArray[x].classList.add("correct");
      spanArray[x].classList.remove("incorrect");
    } else {
      spanArray[x].classList.add("incorrect");
      spanArray[x].classList.remove("correct");
    }
  }
});
