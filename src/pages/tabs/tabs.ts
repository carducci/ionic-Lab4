import {AgendaPage} from "../agenda/agenda";
import {SchedulePage} from "../schedule/schedule";
import {Component} from "@angular/core";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab
        [root]="schedule"
        tabTitle="Conf Schedule"
        tabIcon="calendar"
      ></ion-tab>
      <ion-tab 
        [root]="agenda" 
        tabTitle="My Agenda" 
        tabIcon="list"
        ></ion-tab>
    </ion-tabs>
  `
})
export class Tabs {
  agenda = AgendaPage;
  schedule = SchedulePage
}
