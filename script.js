const numberOfSeries = prompt("Nechta serial ko’rdingiz?");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: {},
  privat: false,
};

  const question1 = prompt("Oxirgi ko’rgan serialingiz?", "");
  const rate1 = prompt("Nechi baxo berasiz?", "");

  seriesDB.count++;

  if (seriesDB.count <= 5) {
    console.log('Kam serial ko’ripsiz');
  } else if (seriesDB.count <= 10) {
    console.log('Siz classik tamoshabin ekansiz');
  } else if (seriesDB.count >= 15) {
    console.log('Siz serialchi zvezda ekansiz');
  } 

//   console.log(question1);
//   console.log(rate1);
  seriesDB.series[question1] = rate1



