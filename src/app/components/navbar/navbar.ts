import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTab } from '../../models/nav-tab.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeTabId = 'overview';
  menuOpen = false;

  tabs: NavTab[] = [
    { id: 'overview',           label: 'מבט על' },
    { id: 'key-metrics',        label: 'מדדים מרכזיים' },
    { id: 'traffic-light',      label: 'מודל הרמזור' },
    { id: 'children',           label: 'תחלואה ואשפוזי ילדים' },
    { id: 'vaccination-impact', label: 'השפעת התחסנות על התחלואה' },
    { id: 'deaths',             label: 'נפטרים' },
    { id: 'tests',              label: 'בדיקות' },
    { id: 'investigations',     label: 'תחקורים נוספים' },
    { id: 'reinfection',        label: 'תחלואה חוזרת ומחלימים' },
    { id: 'vaccination',        label: 'התחסנות האוכלוסיה' },
  ];

  get activeLabel(): string {
    return this.tabs.find(t => t.id === this.activeTabId)?.label ?? '';
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  selectTab(tabId: string): void {
    this.activeTabId = tabId;
    this.menuOpen = false;
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) this.menuOpen = false;
  }
}
