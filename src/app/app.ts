import { Component, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { OverviewSection } from './sections/overview-section/overview-section';
import { CentralIndicatorsSection } from './sections/central-indicators-section/central-indicators-section';
import { TestsSection } from './sections/tests-section/tests-section';
import { ChildrenSection } from './sections/children-section/children-section';
import { VaccinationPopulationSection } from './sections/vaccination-population-section/vaccination-population-section';
import { HighchartsConfigService } from './services/highcharts-config.service';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, OverviewSection, CentralIndicatorsSection, TestsSection, ChildrenSection, VaccinationPopulationSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private highchartsConfig: HighchartsConfigService) {}

  ngOnInit() {
    this.highchartsConfig.initGlobalConfig();
  }
}
