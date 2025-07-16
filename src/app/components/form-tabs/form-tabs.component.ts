import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormStateService } from 'src/app/services/form-state.service';
import { IDATA_A_DATA_B, IFORM_DATA, IFORM_DETAILS } from '../utils/interface/form-state.interface';
import { FORM_A, FORM_B } from '../utils/const/common.const';

@Component({
  selector: 'app-form-tabs',
  templateUrl: './form-tabs.component.html',
  styleUrls: ['./form-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTabsComponent implements OnInit{
  currentTabName: string = "Form A";
  formA: IFORM_DATA[] = FORM_A;
  formB: IFORM_DATA[] = FORM_B;
  data!: IFORM_DETAILS;

  constructor(private formStateService: FormStateService) {
    //
  }

  ngOnInit(): void {
    this.getDetails();
  }

  receivedFormDetails(value: IDATA_A_DATA_B): void {
    this.formStateService.addFormDetails(value, this.currentTabName);
    this.getDetails();
  }

  onTabChange(event: MatTabChangeEvent): void {
    this.currentTabName = event.tab.textLabel;
  }

  getDetails(): void {
   this.data =  this.formStateService.getDataStore();
  }
}
