document.addEventListener("DOMContentLoaded", async () => {
    const searchInput = document.getElementById("search");
    const resultsList = document.getElementById("results");
  
    let cities = [];
    try {
      const response = await fetch("cities.json");
      cities = await response.json();
    } catch (error) {
      console.error("Error cargando las ciudades:", error);
    }
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      resultsList.innerHTML = "";
  
      if (query) {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().includes(query)
        );
  
        filteredCities.forEach(city => {
          const li = document.createElement("li");
          li.textContent = city;
          resultsList.appendChild(li);
  
          li.addEventListener("click", () => {
            searchInput.value = city;
            resultsList.innerHTML = "";
          });
        });
      }
    });
  });
  