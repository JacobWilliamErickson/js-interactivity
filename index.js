const inputField = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const message = document.querySelector('#message');


const addMovie = (evt) => {
  evt.preventDefault();
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "X";
  deletebtn.addEventListener("click", deleteMovie);
  movie.appendChild(deletebtn);
  ul.appendChild(movie);
  inputField.value = "";
};
const deleteMovie = (evt) => {
  evt.target.parentNode.remove();
  message.textContent = 'Movie deleted!'
};
const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked");
  if(evt.target.classList.contains('checked')){
    message.textContent = 'Movie has been checked off'
  } else {
    message.textContent= 'Movie has been un-checked'
  }
};

form.addEventListener("submit", addMovie);
