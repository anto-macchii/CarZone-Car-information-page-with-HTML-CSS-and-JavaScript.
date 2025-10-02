document.addEventListener("DOMContentLoaded", () => {
  const verMasBtn = document.querySelector(".ver-mas a");
  const hiddenItems = document.querySelectorAll(".grid-item.hidden");
  let expanded = false;

  verMasBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!expanded) {
      hiddenItems.forEach(item => {
        item.classList.add("show");
        item.classList.remove("hidden");
      });
      verMasBtn.textContent = "Ver menos artículos";
      expanded = true;
    } else {
      hiddenItems.forEach(item => {
        item.classList.remove("show");
        item.classList.add("hidden");
      });
      verMasBtn.textContent = "Ver más artículos";
      expanded = false;
    }
  });
});

