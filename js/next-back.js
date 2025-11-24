export function nextBack() {
  const buttonNB = document.querySelector(".buttons__next-back");
  const buttonNext = document.querySelector(".button__next");
  const buttonBack = document.querySelector(".button__back");
  const imageTarget = document.querySelector(".image__display");
  const textTarget = document.querySelector(".text__description");
  const titleTarget = document.querySelector("h2");
  const descriptionTarget = document.querySelector(".description__target");

  const list = [
    {
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      directory: "./images/desktop-image-hero-1.jpg",
      alt: "protraying a cozy image with sunline coming in from an off screen window basking the bonsai tree on top of a table and the chairs that come with it",
    },
    {
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      directory: "./images/desktop-image-hero-2.jpg",
      alt: "picture of a yellow, mint, flesh chairs",
    },
    {
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      directory: "./images/desktop-image-hero-3.jpg",
      alt: "picture of a black steelchair with cushions",
    },
  ];

  const buttonEvents = ["click", "keydown"];

  buttonEvents.forEach((buttonEvent) =>
    buttonNext.addEventListener(buttonEvent, (event) => {
      if (
        event.code === "Enter" ||
        event.code === "Space" ||
        event.type === "click"
      ) {
        const index = buttonNB.dataset.index;
        if (parseFloat(index) + 1 > 2) {
          buttonNB.dataset.index = 0;
        } else {
          buttonNB.dataset.index++;
        }
        updateDisplay("Next");
      }
    })
  );

  buttonEvents.forEach((buttonEvent) =>
    buttonBack.addEventListener(buttonEvent, (event) => {
      if (
        event.code === "Enter" ||
        event.code === "Space" ||
        event.type === "click"
      ) {
        const index = buttonNB.dataset.index;

        if (parseFloat(index) - 1 < 0) {
          buttonNB.dataset.index = 2;
        } else {
          buttonNB.dataset.index--;
        }

        updateDisplay("Back");
      }
    })
  );

  const updateDisplay = async (direction) => {
    const index = buttonNB.dataset.index;

    switching("Out", direction, imageTarget);
    await switching("Out", direction, textTarget);

    imageTarget.setAttribute("src", list[index].directory);
    imageTarget.setAttribute("alt", list[index].alt);

    titleTarget.textContent = list[index].title;
    descriptionTarget.textContent = list[index].description;

    switching("In", direction, imageTarget);
    await switching("In", direction, textTarget);
  };

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function switching(placement, direction, element) {
    element.classList.add(`switch${placement}${direction}`);
    await wait(400);
    element.classList.remove(`switch${placement}${direction}`);
  }
}
