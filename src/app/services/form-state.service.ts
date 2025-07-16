import { Injectable } from '@angular/core';
import { IDATA_A_DATA_B, IFORM_DETAILS} from 'src/app/components/utils/interface/form-state.interface'
import { FORM_DETAILS, FORM_TYPE_A } from 'src/app/components/utils/const/common.const';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
 FormDetails: IFORM_DETAILS = {
  formADetails: [],
  formBDetails: []
 };

  addFormDetails(details: IDATA_A_DATA_B, formType: string): void {
    if(formType === FORM_TYPE_A) {
      this.FormDetails.formADetails.push(details);
    } else {
      this.FormDetails.formBDetails.push(details);
    }
    this.setDataStore();
  }

  setDataStore(): void {
    localStorage.setItem(FORM_DETAILS, JSON.stringify(this.FormDetails));
  }

  getDataStore(): IFORM_DETAILS {
    const data = localStorage.getItem(FORM_DETAILS);
    return data ? this.FormDetails = JSON.parse(data) : this.FormDetails;
  }
}
