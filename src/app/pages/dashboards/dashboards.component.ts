import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {addDashboardDialog} from "./addDashboard/add.dashboard.component";
import * as fromRoot from "../../../app/store/reducers/application.reducer"
import {ApplicationState} from "../../store/state/application.state";
import {Store} from "@ngrx/store";
import {DashboardsState} from "../../store/state/dashboards.state";
import {Observable} from "rxjs";
import {RemoveDashboardAction} from "../../store/actions/dashboards.action";

@Component({
  selector: 'app-dashboards',
  templateUrl: 'dashboards.component.html',
  styleUrls: ['dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  dashboards$: Observable<DashboardsState>;
  constructor(public dialog: MdDialog, private store: Store<ApplicationState>) {

  }

  ngOnInit() {

      this.dashboards$ = this.store.select(fromRoot.getDashboards)
  }


  addDashboard () {

      this.dialog.open(addDashboardDialog)

  }

  deleteDashboard(dashboard) {

      this.store.dispatch(new RemoveDashboardAction(dashboard));
  }

}
