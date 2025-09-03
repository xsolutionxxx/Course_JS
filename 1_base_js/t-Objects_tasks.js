const userInfo = {
  name: "Nazar",
  surname: "Talaievych",
  age: 20,
  skills: {
    progLang: {
      js: "35%",
      react: "47%",
    },
    lang: ["en", "spa", "ukr"],
    exp: "1 month",
  },
  showExperience: function () {
    return `Досвід користувача: ${userInfo.skills.exp}`;
  },
  showProgrammingLangs: function () {
    const lang = userInfo.skills.progLang;
    res = "";
    for (let key in lang) {
      res += `Мова ${key} вивчена на ${lang[key]}\n`;
    }
    return res;
  },
  showAgeAndLangs: (object) => {
    const { age } = object;
    const lang = object["skills"]["lang"];

    return `Мені ${age} і я володія мовами: ${lang.join(" ").toUpperCase()}`;
  },
  /* showAgeAndLangs: function (plan) {
    const { languages } = plan.skills;
    let str = `Мне ${plan.age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  }, */
};

/* console.log(userInfo.showExperience()); */
/* console.log(userInfo.showProgrammingLangs()); */
/* console.log(userInfo.showAgeAndLangs(userInfo)); */

const showExperience = function (object) {
  const { exp } = object.skills;
  return `Досвід користувача: ${exp}`;
};

function showProgrammingLangs(object) {
  const { progLang } = object.skills;
  let str = "";
  for (let key in progLang) {
    str += `Мова ${key} вивчена на ${progLang[key]}\n`;
  }
  return str;
}

const showAgeAndLangs = (object) => {
  const { lang } = object.skills;
  const fakeArr = lang.slice();
  /* let temporaryArr = []; */

  for (let i = 0; i < fakeArr.length; i++) {
    fakeArr[i] = fakeArr[i].toUpperCase();
  }

  /* lang.forEach((item, i) => {
    temporaryArr[i] = item.toUpperCase();
  }); */

  return `Мені ${object.age} і я володія мовами: ${fakeArr.join(" ")}`;
};

console.log(showExperience(userInfo));
console.log(showProgrammingLangs(userInfo));
console.log(showAgeAndLangs(userInfo));

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 56355,
  isBudgetEnough: function () {
    const { shops, height, moneyPer1m3, budget } = shoppingMallData;

    let area = 0;

    shops.forEach((item) => {
      /* summaryArea = item.width * item.length + summaryArea; */
      summaryArea += item.width * item.length;
    });

    let finalSum = summaryArea * height * moneyPer1m3;

    if (finalSum <= budget) {
      return console.log(
        `Бюджета достаточно. Останетса: ${budget - finalSum}$`
      );
    } else {
      return console.log(
        `Бюджета недостаточно. Не достает: ${finalSum - budget}$`
      );
    }
  },
};

shoppingMallData.isBudgetEnough();
