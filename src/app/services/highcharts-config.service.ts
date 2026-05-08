import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartsConfigService {
  constructor() { }

  initGlobalConfig() {
    Highcharts.setOptions({
      lang: {
        loading: 'טוען...',
        noData: 'אין נתונים להצגה',
        printChart: 'הדפס תרשים',
        downloadPNG: 'הורד תמונת PNG',
        downloadJPEG: 'הורד תמונת JPEG',
        downloadPDF: 'הורד מסמך PDF',
        downloadSVG: 'הורד תמונת SVG',
        contextButtonTitle: 'תפריט הקשר של תרשים',
        resetZoom: 'אפס זום',
        resetZoomTitle: 'אפס זום ברמה 1:1',
        viewFullscreen: 'צפה במסך מלא',
        numericSymbols: [' אלף', ' מיליון', ' מיליארד']
      },
      chart: {
        style: {
          fontFamily: 'Open Sans Hebrew, sans-serif'
        }
      },
      credits: {
        enabled: false // מוריד את Highcharts.com
      },
      title: {
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#222B45'
        }
      },
      tooltip: {
        useHTML: true,
        style: {
          direction: 'rtl'
        }
      },
      legend: {
        useHTML: true,
        rtl: true
      }
    });
  }
}
