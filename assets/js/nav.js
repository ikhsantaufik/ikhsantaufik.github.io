let isHambergerOpen = false;
const openHamberger = () => {
  let hambergerItemsElement = document.getElementById("hamberger-bars-items");

  if (!isHambergerOpen) {
    hambergerItemsElement.style.display = "block";
    isHambergerOpen = true;
  } else {
    hambergerItemsElement.style.display = "none";
    isHambergerOpen = false;
  }
};
