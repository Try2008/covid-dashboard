import * as Highcharts from 'highcharts';

// פונקציית עזר - יוצרת מערך תאריכים בפורמט 'dd.mm'
function generateDates(count: number, startDay: number, startMonth: number): string[] {
  const dates: string[] = [];
  const d = new Date(2023, startMonth - 1, startDay);
  for (let i = 0; i < count; i++) {
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    dates.push(`${day}.${month}`);
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

// ─── גרף 1: עמודות אנכיות - מאומתים חדשים יומי ─────────────────────────────
export function getDailyConfirmedConfig(): Highcharts.Options {
  const categories = generateDates(28, 4, 4);
  return {
    chart: { type: 'column' },
    title: { text: '' },
    xAxis: {
      categories,
      reversed: true,
      title: { text: 'תאריך' },
      labels: { useHTML: true, step: 3 } // מציג תאריך כל 3 ימים
    },
    yAxis: {
      opposite: true,
      title: { text: 'מספר חולים' },
      min: 0,
      tickInterval: 3 // ציר Y בקפיצות של 3
    },
    plotOptions: {
      column: { borderRadius: 2 }
    },
    legend: { align: 'right', verticalAlign: 'top', useHTML: true },
    series: [
      {
        type: 'column',
        name: 'מאומתים חדשים',
        color: '#5DADE2',
        data: [5, 12, 8, 3, 10, 15, 7, 2, 8, 14, 6, 9, 11, 4, 2, 7, 10, 13, 5, 8, 12, 6, 3, 9, 11, 5, 7, 1]
      },
      {
        type: 'line',
        name: 'ממוצע נע מאומתים',
        color: '#FF8A65',
        data: [6, 7, 8, 8, 8, 9, 8, 7, 7, 8, 9, 9, 8, 7, 6, 6, 7, 8, 8, 8, 8, 7, 6, 6, 7, 7, 6, 5],
        marker: { enabled: true, symbol: 'circle', radius: 3 }
      }
    ]
  };
}

// ─── גרף 2: עמודות אופקיות - נבדקים לפי קבוצות גיל ──────────────────────────
export function getTestedByAgeConfig(): Highcharts.Options {
  return {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: {
      categories: ['+90', '80-89', '70-79', '60-69', '50-59', '40-49', '30-39', '20-29', '10-19', '0-9'],
      title: { text: 'קבוצת גיל' }
    },
    yAxis: {
      opposite: true,
      title: { text: 'סה"כ' }
    },
    legend: { align: 'right', verticalAlign: 'top', useHTML: true },
    plotOptions: { bar: { borderRadius: 2 } },
    series: [
      {
        type: 'bar',
        name: 'נבדקים',
        color: '#5DADE2',
        data: [120, 580, 1250, 2100, 3400, 4200, 5100, 6300, 4800, 2900]
      },
      {
        type: 'bar',
        name: 'נבדקים חיוביים',
        color: '#0E9594',
        data: [5, 22, 48, 95, 130, 160, 200, 250, 190, 110]
      }
    ]
  };
}

// ─── גרף 3: Combo - עמודות מוערמות + קו - בדיקות קורונה יומי ────────────────
export function getDailyTestsComboConfig(): Highcharts.Options {
  const categories = generateDates(28, 4, 4);
  return {
    chart: { type: 'column' },
    title: { text: '' },
    xAxis: {
      categories,
      reversed: true,
      title: { text: 'תאריך' },
      labels: { step: 3 } // מציג תאריך כל 3 ימים
    },
    yAxis: {
      opposite: true,
      title: { text: 'מספר בדיקות' }
    },
    plotOptions: {
      column: { stacking: 'normal', borderRadius: 2 }
    },
    legend: { align: 'right', verticalAlign: 'top', useHTML: true },
    series: [
      {
        type: 'column',
        name: 'בדיקות PCR',
        color: '#5DADE2',
        data: [45, 62, 58, 43, 70, 85, 57, 42, 68, 84, 66, 59, 71, 44, 32, 57, 80, 93, 55, 48, 72, 56, 43, 69, 81, 45, 57, 21]
      },
      {
        type: 'column',
        name: 'אנטיגן מוסדי',
        color: '#9CB832',
        data: [15, 22, 18, 13, 20, 25, 17, 12, 18, 24, 16, 19, 21, 14, 12, 17, 20, 23, 15, 18, 22, 16, 13, 19, 21, 15, 17, 11]
      },
      {
        type: 'line',
        name: 'ממוצע נע סך הבדיקות',
        color: '#FF8A65',
        data: [60, 65, 70, 68, 72, 80, 78, 65, 70, 80, 85, 82, 78, 70, 60, 65, 75, 90, 80, 75, 82, 75, 68, 72, 82, 72, 68, 55],
        marker: { enabled: true, symbol: 'circle', radius: 3 }
      }
    ]
  };
}

// ─── גרף 4: Multi-line - מגמת ילדים מאומתים לפי קבוצות גיל ──────────────────
export function getChildrenTrendConfig(): Highcharts.Options {
  const categories = generateDates(28, 4, 4);
  return {
    chart: { type: 'line' },
    title: { text: '' },
    xAxis: {
      categories,
      reversed: true,
      title: { text: 'תאריך' },
      labels: { step: 3 }
    },
    yAxis: {
      opposite: true,
      title: { text: 'מספר מאומתים' },
      min: 0
    },
    plotOptions: {
      line: { marker: { enabled: true, radius: 3 } }
    },
    legend: { align: 'right', verticalAlign: 'top', useHTML: true },
    series: [
      {
        type: 'line',
        name: '0-4',
        color: '#5DADE2',
        // ערכים נמוכים ורגועים - קרוב למקור
        data: [0, 1, 0, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
      },
      {
        type: 'line',
        name: '5-11',
        color: '#9CB832',
        data: [1, 2, 1, 0, 2, 3, 1, 0, 2, 3, 1, 2, 2, 0, 0, 1, 2, 3, 1, 2, 2, 1, 0, 2, 2, 1, 1, 0]
      },
      {
        type: 'line',
        name: '12-15',
        color: '#0E9594',
        data: [0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 1, 1, 2, 0, 0, 1, 2, 2, 1, 1, 2, 1, 0, 1, 2, 1, 1, 0]
      },
      {
        type: 'line',
        name: '16-19',
        color: '#B19CD9',
        data: [0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 0, 1, 2, 0, 0, 1, 2, 2, 0, 1, 2, 1, 0, 1, 2, 0, 1, 0]
      }
    ]
  };
}

// ─── גרף 5: Stacked Bar - אחוז מתחסנים לפי קבוצות גיל ───────────────────────
export function getVaccinationByAgeConfig(): Highcharts.Options {
  return {
    chart: { type: 'bar' },
    title: { text: '' },
    xAxis: {
      categories: ['+80', '70-79', '60-69', '50-59', '40-49', '30-39', '20-29', '16-19', '12-15', '5-11'],
      title: { text: 'קבוצת גיל' }
    },
    yAxis: {
      opposite: true,
      title: { text: 'סה"כ %' },
      labels: { format: '{value}%' }
    },
    plotOptions: {
      bar: { stacking: 'percent', borderRadius: 2 }
    },
    legend: { align: 'right', verticalAlign: 'top', useHTML: true },
    // סדר הסדרות: הראשונה מוצגת מימין בגרף stacked bar
    // לא מחוסנים → ללא תוקף → מחוסנים (מימין לשמאל כמו במקור)
    series: [
      {
        type: 'bar',
        name: 'לא מחוסנים',
        color: '#5DADE2', // כחול בהיר - מימין
        data: [8, 10, 14, 19, 24, 30, 34, 38, 42, 46]
      },
      {
        type: 'bar',
        name: 'מחוסנים ללא תוקף',
        color: '#9CB832', // ירוק-ליים - אמצע
        data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      },
      {
        type: 'bar',
        name: 'מחוסנים',
        color: '#0E9594', // טורקיז - משמאל
        data: [82, 79, 74, 68, 62, 55, 50, 45, 40, 35]
      }
    ]
  };
}
