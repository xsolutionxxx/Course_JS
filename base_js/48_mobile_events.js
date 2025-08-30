"use strict";

// touchstart - спрацьовує після доторкання до цього елементу
// touchmove - спрацьовує кожен раз, коли палець після доторкання починає двигатися по елементу
// touchend - спрацьовує як тільки палець відрвався від елементу
// touchenter - буде спрацьовувати, як тільки палець скользив і зайшов за придели цього елементу
// touchleave - буде спрацьовувати, як тільки палець скользив і вийшов за придели цього елементу
// touchcancel - спрацьовує коли точка доторкання більше не регеструється на поверхні

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();

    console.log(e.type);
    console.log(e.touches);
    console.log(e.targetTouches);
    console.log(e.targetTouches[0].pageX);
  });
});

// touches - якщо потрібно отримати інформацію про всі пальці, що зараз на екрані
// targetTouches - якщо потрібно отримати інформацію про всі пальці на цьому елементі
// changedTouches - якщо потрібно отримати інформацію про пальці, які приймають участь в цій події
