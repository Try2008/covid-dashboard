# דשבורד נתוני קורונה - Covid-19 Dashboard Clone

קלון של דשבורד הקורונה של משרד הבריאות הישראלי, בנוי ב-Angular עם תמיכה מלאה ב-RTL ועברית.
מבוסס על: [datadashboard.health.gov.il/COVID-19/general](https://datadashboard.health.gov.il/COVID-19/general)

## טכנולוגיות

- **Angular 21+** (Standalone components, Signals-ready)
- **Highcharts** (highcharts-angular) — גרפים אינטראקטיביים
- **SCSS** עם design tokens, mixins וב-breakpoints מובנים
- **TypeScript** strict mode
- **Open Sans Hebrew** + **Material Icons**

## הרצה

```bash
npm install
npm start          # שרת פיתוח על http://localhost:4200
npm run build      # build ל-production לתיקיית dist/
```

## מבנה הפרויקט

```
src/app/
├── components/                 # קומפוננטות לשימוש חוזר
│   ├── header/                 # כותרת עליונה (sticky)
│   ├── navbar/                 # ניווט עם hamburger אוטומטי במובייל
│   ├── dashboard-section/      # מעטפת אחידה לסקשן
│   ├── stat-card/              # כרטיסיית סטטיסטיקה (5 כרטיסים ב-Overview)
│   ├── trend-card/             # כרטיסיית מגמה שבועית
│   ├── chart-card/             # מעטפת לגרפים (placeholder או Highcharts)
│   ├── cities-vaccination-table/   # טבלת חיסונים לפי יישוב
│   └── traffic-light-table/    # טבלת מודל הרמזור
├── sections/                   # סקשני העמוד
│   ├── overview-section/
│   ├── central-indicators-section/
│   ├── traffic-light-section/
│   ├── children-section/
│   ├── vaccination-impact-section/
│   ├── deaths-section/
│   ├── tests-section/
│   ├── investigations-section/
│   ├── reinfection-section/
│   └── vaccination-population-section/
├── data/                       # mock data (חיסונים, רמזור, סטטיסטיקות)
├── models/                     # TypeScript interfaces
├── services/                   # Highcharts global config
└── utils/                      # פונקציות עזר (sort)
```

## פיצ'רים

### תוכן
- **10 סקשנים מלאים** — סקירה כללית, מדדים מרכזיים, מודל הרמזור, ילדים, השפעת חיסונים, נפטרים, בדיקות, תחקורים, תחלואה חוזרת, התחסנות אוכלוסיה
- **5 גרפים אינטראקטיביים** של Highcharts (column, line, area)
- **2 טבלאות** עם ~40 יישובים בכל אחת

### אינטראקטיביות
- **מיון בטבלאות** — לחיצה על כותרת עמודה ממיינת asc/desc, כולל מיון לפי "חומרה" של צבע הרמזור (green→yellow→orange→red) ומיון מחרוזות עברי עם `localeCompare('he')`
- **חיפוש בטבלאות** — סינון יישוב לפי שם בזמן הקלדה
- **ניווט עם גלילה לסקשן** — לחיצה על טאב גוללת חלק לסקשן הרלוונטי
- **תפריט hamburger** — מתחת ל-1024px הניווט עובר לתפריט נפילה אנכי
- **Tooltips** מעוצבים על אייקוני ה-i (CSS pseudo-elements, ללא ספריה)
- **Hover effects** עדינים על כרטיסיות, שורות, וכפתורים
- **Focus states** עקביים לנגישות מקלדת (`:focus-visible`)

### עיצוב ורספונסיביות
- **RTL מלא** עם `dir="rtl"` ו-`text-align: right`
- **Sticky header + navbar** — נשארים בראש בגלילה
- **Breakpoints:** mobile (<600px), tablet (<1024px), desktop (<1440px), wide (≥1440px)
- **Grid responsive** — overview cards עוברים מ-5→3→2→1 עמודות לפי הרוחב
- **טבלאות עם גלילה אופקית** במובייל + sticky header פנימי

## הערות מימוש

- כל הקומפוננטות הן **standalone** (לא NgModule)
- **Mock data בלבד** — הנתונים סטטיים, ללא API
- **Highcharts global config** ב-[`services/highcharts-config.service.ts`](src/app/services/highcharts-config.service.ts) מגדיר RTL וכיוון לכל הגרפים
- **Sort utility גנרי** ב-[`utils/sort.util.ts`](src/app/utils/sort.util.ts) משותף לשתי הטבלאות עם תמיכה ב-`customOrder` למיון לפי דירוג מותאם

## Build production

```bash
npm run build
```

הפלט נכתב ל-`dist/covid-dashboard/`. הפרויקט מקומפל ל-bundle אחד מינימלי שניתן להעלות לכל hosting סטטי.
