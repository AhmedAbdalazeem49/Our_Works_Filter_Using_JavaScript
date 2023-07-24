let switcherLis = document.querySelectorAll(".swithcher li");

let divs = Array.from(document.querySelectorAll(".gallery div"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageDivs);
});

// remove active class from all lis and add it to the current one

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// manage Divs

function manageDivs() {
  divs.forEach((div) => {
    div.style.display = "none";
    document.querySelectorAll(this.dataset.cat).forEach((div) => {
      div.style.display = "block";
    });
  });
}
