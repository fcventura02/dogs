const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

bars.addEventListener("click", () => {
  if (menu.classList.contains("hidden") && window.innerWidth < 768) {
    menu.classList.toggle("hidden");
    menu.classList.add(
      "flex",
      "flex-col",
      "text-center",
      "w-full",
      "absolute",
      "top-16",
    );
  } else {
    menu.classList.toggle("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "text-center",
      "w-full",
      "absolute",
      "top-16",
    );
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.add("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "text-center",
      "w-full",
      "absolute",
      "top-16",
    );
  }
});
