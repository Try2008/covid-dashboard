import { Component } from '@angular/core';
import { NavTab } from '../../models/nav-tab.model';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeTabId = 'overview';

  tabs: NavTab[] = [
    { id: 'overview', label: 'מבט על' },
    { id: 'key-metrics', label: 'מדדים מרכזיים' },
    { id: 'children', label: 'תחלואה ואשפוזי ילדים' },
    { id: 'vaccination-impact', label: 'השפעת התחסנות על התחלואה' },
    { id: 'deaths', label: 'נפטרים' },
    { id: 'tests', label: 'בדיקות' },
    { id: 'investigations', label: 'תחקורים נוספים' },
    { id: 'reinfection', label: 'תחלואה חוזרת ומחלימים' },
    { id: 'vaccination', label: 'התחסנות האוכלוסיה' }
  ];

  selectTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
