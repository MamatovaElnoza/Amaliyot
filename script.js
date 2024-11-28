const numberOfSeries = prompt("Nechta serial ko’rdingiz?");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: {},
    privat: false
}

const question1 = prompt('Oxirgi ko’rgan serialingiz?');
const rate1 = prompt('Nechi baxo berasiz?');
const question2 = prompt('Oxirgi ko’rgan serialingiz?');
const rate2 = prompt('Nechi baxo berasiz?');

seriesDB.series[question1] = rate1
seriesDB.series[question2] = rate2

console.log(seriesDB);
