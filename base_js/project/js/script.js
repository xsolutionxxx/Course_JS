/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  // 1

  /* adds.forEach((item) => {
    item.remove();
    }); */

  /* for (let i = adds.length - 1; i >= 0; i--) {
      adds[i].remove();
      } */

  // 2

  /* genre.textContent = "драма"; */

  /* const div = document.createElement("div");
     div.textContent = "драма";
     div.classList.add(genre);
     genre.replaceWith(div); */

  // 3

  /* bg.style.backgroundImage = "url(./img/bg.jpg)"; */
  /* bg.style.background = "url(./img/bg.jpg) center center / cover no-repeat"; */
  /* bg.style.cssText =
     "background: url(./img/bg.jpg) center center / cover no-repeat;"; */

  // 4 - 5
  /* movieDB.movies.sort();
     
     listItem.forEach((item, i) => {
      item.innerHTML = `${i + 1}. ${movieDB.movies[i]}`;
      item.insertAdjacentHTML("beforeend", `<div class="delete"></div>`);
      }); */

  const adv = document.querySelectorAll(".promo__adv img"),
    bg = document.querySelector(".promo__bg"),
    genre = document.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  // 1

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 22)}...`;
      }

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);

      createMovieList(movieDB.movies, movieList);
    }

    e.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";

    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    parent.querySelectorAll(".delete").forEach((deleted, i) => {
      deleted.addEventListener("click", () => {
        deleted.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
