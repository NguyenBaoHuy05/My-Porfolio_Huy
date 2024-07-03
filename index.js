document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const titles = document.querySelectorAll("header ul li");

  function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", (event) => {
    event.preventDefault();
    boxes.forEach((box, index) => {
      titles[index].querySelector("a").style.color = "black";
      if (isInViewPort(box)) {
        titles[index].querySelector("a").style.color = "yellow";
      }
    });
  });
});
