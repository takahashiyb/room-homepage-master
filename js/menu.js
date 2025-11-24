export function menuButton() {
  const buttonMenu = document.querySelector(".button__hamburger");
  const dialog = document.querySelector(".dialog");
  const buttonClose = document.querySelector(".button__close");
  const body = document.querySelector(".grid__body");

  buttonMenu.addEventListener("click", () => {
    body.setAttribute("inert", "");

    dialog.show();
  });

  buttonClose.addEventListener("click", () => {
    body.removeAttribute("inert");

    dialog.close();
  });

  const mediaQuery = window.matchMedia("(min-width: 840px)");

  function handleChange(e) {
    if (e.matches && dialog.open) {
      body.removeAttribute("inert");

      dialog.close();
    }
  }

  mediaQuery.addEventListener("change", handleChange);
}
