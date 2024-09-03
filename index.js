document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const sidebar = document.querySelector(".sidebar");
  document.querySelector(".toggle-sidebar").addEventListener("click", (e) => {
    if(main.classList.contains("side-open")) {
      main.classList.remove("side-open");
      main.classList.add("side-closed");

      sidebar.classList.remove("open");
      sidebar.classList.add("close");
    } else {
      main.classList.remove("side-closed");
      main.classList.add("side-open");

      sidebar.classList.remove("close");
      sidebar.classList.add("open");
    }
  })
  
});
