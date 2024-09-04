

document.addEventListener("DOMContentLoaded", () => {
  // DOM variables
  const main = document.querySelector("main");
  const sidebar = document.querySelector(".sidebar");
  const cardsElement = document.querySelector(".cards-container");

  // Get Data from API

  const apiUrl = 'https://dummyjson.com/c/0bbf-1685-443d-b67c';
  window.fetch(apiUrl).then((response) => {
    return response.json();
  }).then((data) => {
    const cards = data[0]["General data"];
    const charts = data[1];
    const integration = data[2];

    cards.forEach(card => {
      const cardElement = `<div class="card">
              <h3>${card.title}</h3>
              <div class="value">${card.cardvalue}</div>
              <div class="change">
                <div class="trend ${card.trend}">${card.change}</div>
                <div>Compared to last month</div>
              </div>
            </div>`
      cardsElement.innerHTML += cardElement;
    });
  })

  // Sidebar open/close beahvior
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
