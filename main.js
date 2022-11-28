let arrow = document.querySelectorAll(".navegation-link__down");

for (let item of arrow) {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const arrowParent = event.target.parentElement.parentElement;

    arrowParent.classList.toggle("show");
  });
}

let toggle = document.querySelector(".sidebar-navbar-toggler__button");

toggle.addEventListener("click", (event) => {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("closed");
});
