import { StatCard } from '../models/stat-card.model';
import { TrendCard } from '../models/trend-card.model';

export const mainStatsData: StatCard[] = [
  {
    id: 'confirmed-yesterday',
    title: 'מאומתים אתמול',
    mainValue: 1,
    secondaryLines: [
      { value: 0, label: 'מחצות' },
      { value: 4863849, label: 'סה"כ' }
    ],
    tooltip: 'מספר המאומתים החדשים שאובחנו אתמול',
    hasMenu: false
  },
  {
    id: 'active-cases',
    title: 'חולים פעילים',
    mainValue: 362,
    secondaryLines: [
      { value: 197, label: 'בבי"ח' }
    ],
    tooltip: 'מספר החולים הפעילים כעת',
    hasMenu: false
  },
  {
    id: 'vaccinated',
    title: 'מתחסנים',
    mainValue: undefined,
    secondaryLines: [
      { value: 6722619, label: 'מנה 1' },
      { value: 6006813, label: 'מנה 2' },
      { value: 3857480, label: 'מנה 3' },
      { value: 475778, label: 'מנה 4' },
      { value: 407434, label: 'אומיקרון' }
    ],
    tooltip: 'מספר המתחסנים הכולל במדינת ישראל לפי מנות חיסון',
    hasMenu: false
  },
  {
    id: 'deaths',
    title: 'נפטרים מצטבר',
    mainValue: 13173,
    tooltip: 'סה"כ הנפטרים מקורונה עד כה בישראל',
    hasMenu: false
  },
  {
    id: 'positive-percentage',
    title: 'אחוז נבדקים חיוביים אתמול',
    mainValue: '1.06%',
    secondaryLines: [
      { value: 94, label: 'נבדקים לגילוי הנגיף אתמול' },
      { value: 100, label: 'כלל הבדיקות אתמול' }
    ],
    tooltip: 'אחוז הבדיקות החיוביות מסך הבדיקות לגילוי נגיף הקורונה אתמול',
    hasMenu: false
  }
];

export const weeklyStatsData: TrendCard[] = [
  {
    id: 'weekly-confirmed',
    title: 'מספר המאומתים',
    mainValue: 51,
    trendPercentage: 82.1,
    trendLabel: 'משבעה ימים קודמים',
    trendColor: 'negative', // More confirmed cases = bad (negative context)
    tooltip: 'סיכום מספר המאומתים ב-7 הימים האחרונים בהשוואה לשבוע שלפניו'
  },
  {
    id: 'weekly-deaths',
    title: 'מספר נפטרים',
    mainValue: 0,
    trendPercentage: 0,
    trendLabel: 'משבעה ימים קודמים',
    trendColor: 'neutral',
    tooltip: 'סיכום מספר הנפטרים ב-7 הימים האחרונים'
  },
  {
    id: 'weekly-tested',
    title: 'מספר נבדקים',
    mainValue: 2582,
    trendPercentage: 4.9,
    trendLabel: 'משבעה ימים קודמים',
    trendColor: 'positive', // More tested = good/neutral (let's use positive for green)
    extraLine: '2% נבדקים חיוביים',
    tooltip: 'סיכום מספר הנבדקים ב-7 הימים האחרונים והשוואה לשבוע קודם'
  }
];
