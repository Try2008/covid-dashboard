import { Component, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { OverviewSection } from './sections/overview-section/overview-section';
import { CentralIndicatorsSection } from './sections/central-indicators-section/central-indicators-section';
import { ChildrenSection } from './sections/children-section/children-section';
import { VaccinationImpactSection } from './sections/vaccination-impact-section/vaccination-impact-section';
import { DeathsSection } from './sections/deaths-section/deaths-section';
import { TestsSection } from './sections/tests-section/tests-section';
import { InvestigationsSection } from './sections/investigations-section/investigations-section';
import { ReinfectionSection } from './sections/reinfection-section/reinfection-section';
import { VaccinationPopulationSection } from './sections/vaccination-population-section/vaccination-population-section';
import { TrafficLightSection } from './sections/traffic-light-section/traffic-light-section';
import { HighchartsConfigService } from './services/highcharts-config.service';

@Component({
  selector: 'app-root',
  imports: [
    Header, Navbar,
    OverviewSection,
    CentralIndicatorsSection,
    ChildrenSection,
    VaccinationImpactSection,
    DeathsSection,
    TestsSection,
    InvestigationsSection,
    ReinfectionSection,
    VaccinationPopulationSection,
    TrafficLightSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private highchartsConfig: HighchartsConfigService) {}

  ngOnInit() {
    this.highchartsConfig.initGlobalConfig();
  }
}
