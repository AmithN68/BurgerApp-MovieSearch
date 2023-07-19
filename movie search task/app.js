let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", e => {
  e.preventDefault();
  if (input.value == "") {
    alert("Enter movie name here...");
  } else {
    async function getMovies() {
      let api = await fetch(
        `http://www.omdbapi.com/?s=${input.value}&apikey=14a6c207`
      );
      console.log(api);
      let data = await api.json();
      console.log(data);
      let dataSearch = data.Search;
      console.log(dataSearch);
      let show = document.querySelector("#show");
      show.innerHTML = "";
      input.value = "";

      dataSearch.map(val => {
        show.innerHTML += `
                <div>
                <img src=${val.Poster}>
                <h2>${val.Title}</h2>
                <h3>${val.Year}</h3>
                </div>`;
      });
    }
    getMovies();
  }
});
