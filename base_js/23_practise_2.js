/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// 1)
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2)
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// 1)

for (let i = 0; i < 2; i++) {
  const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    gradeFilm = +prompt("На сколько оцените его?", "");

  if (
    lastFilm === null &&
    gradeFilm === null &&
    lastFilm == "" &&
    lastFilm.length <= 50
  ) {
    console.log("Error");
    i--;
  } else {
    console.log("Done");
  }

  personalMovieDB.movies[lastFilm] = gradeFilm;
}

if (personalMovieDB.count < 10) {
  console.log("low");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 10) {
  console.log("meddium");
} else if (personalMovieDB.count > 30) {
  console.log("high");
} else {
  11;
  console.log("error");
}

console.log(personalMovieDB);
