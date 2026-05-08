import { CityVaccination } from '../models/city-vaccination.model';

function calc(pop: number, pct1: number, pct2: number, pct3: number, pct4: number): CityVaccination['dose1Count'] {
  return Math.round(pop * pct1 / 100);
}

function makeCity(
  cityName: string, population: number,
  p1: number, p2: number, p3: number, p4: number
): CityVaccination {
  return {
    cityName,
    population,
    dose1Count: Math.round(population * p1 / 100),
    dose1Percentage: p1,
    dose2Count: Math.round(population * p2 / 100),
    dose2Percentage: p2,
    dose3Count: Math.round(population * p3 / 100),
    dose3Percentage: p3,
    dose4Count: Math.round(population * p4 / 100),
    dose4Percentage: p4
  };
}

export const citiesVaccinationData: CityVaccination[] = [
  makeCity('ירושלים',        953900, 74, 68, 49, 18),
  makeCity('תל אביב-יפו',    467875, 82, 77, 55, 22),
  makeCity('חיפה',           285316, 85, 80, 58, 24),
  makeCity('ראשון לציון',    265700, 83, 78, 56, 21),
  makeCity('פתח תקווה',      248000, 80, 75, 52, 20),
  makeCity('אשדוד',          240000, 78, 72, 50, 19),
  makeCity('נתניה',          230000, 81, 76, 54, 21),
  makeCity('באר שבע',        215600, 77, 71, 48, 18),
  makeCity('חולון',          197000, 84, 79, 57, 23),
  makeCity('בני ברק',        194000, 65, 59, 38, 12),
  makeCity('רמת גן',         162300, 86, 81, 59, 24),
  makeCity('אשקלון',         156000, 79, 73, 51, 19),
  makeCity('רחובות',         152000, 83, 78, 55, 22),
  makeCity('בת ים',          148400, 82, 77, 54, 21),
  makeCity('הרצליה',         97800, 88, 84, 62, 27),
  makeCity('חדרה',           96200, 80, 75, 53, 20),
  makeCity('כפר סבא',        100900, 87, 82, 60, 25),
  makeCity('מודיעין-מכבים',  108100, 88, 84, 62, 27),
  makeCity('נצרת',           78000, 70, 63, 42, 15),
  makeCity('רמלה',           82000, 75, 69, 47, 17),
  makeCity('לוד',            83600, 73, 67, 45, 16),
  makeCity('רעננה',          99100, 89, 85, 63, 28),
  makeCity('גבעתיים',        61700, 88, 83, 61, 26),
  makeCity('הוד השרון',      60200, 87, 82, 60, 25),
  makeCity('אילת',           51800, 76, 70, 48, 18),
  makeCity('נהריה',          63500, 84, 79, 56, 22),
  makeCity('קריית גת',       64500, 78, 72, 50, 18),
  makeCity('קריית אתא',      58800, 80, 74, 52, 19),
  makeCity('קריית מוצקין',   43900, 83, 78, 55, 21),
  makeCity('עפולה',          53400, 79, 73, 51, 19),
  makeCity('כפר יונה',       44000, 86, 81, 59, 24),
  makeCity('טבריה',          45500, 76, 70, 47, 17),
  makeCity('דימונה',         38500, 72, 66, 44, 15),
  makeCity('יהוד',           36500, 85, 80, 58, 23),
  makeCity('מגדל העמק',      27500, 77, 71, 49, 18),
  makeCity('טירת כרמל',      22500, 78, 72, 50, 19),
  makeCity('שדרות',          30200, 79, 73, 51, 19),
  makeCity('אופקים',         35000, 73, 67, 45, 16),
  makeCity('נצרת עילית',     46500, 81, 75, 53, 20),
  makeCity('קריית שמונה',    24500, 80, 74, 52, 20),
];
