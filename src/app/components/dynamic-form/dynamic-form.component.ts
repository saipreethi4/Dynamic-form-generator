import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMMON_CONST, INPUT_TYPES } from 'src/app/components/utils/const/common.const';
import { IFORM_DATA } from 'src/app/components/utils/interface/form-state.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent {
  @Input() formSchema!: IFORM_DATA[];
  @Output() formDetails: EventEmitter<any> = new EventEmitter();
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  typeArray = INPUT_TYPES;
  form: FormGroup = new FormGroup({});
  commonConst = COMMON_CONST;

  constructor(private snackBar: MatSnackBar) {
    //
  }

  ngOnInit(): void {
    this.formInit();
  }

  //form initialization
  formInit(): void {
    this.formSchema.forEach((res: IFORM_DATA) => {
      this.form.addControl(res.name, new FormControl("", 
        [res?.required ? Validators.required : Validators.nullValidator, 
          res.type === this.commonConst.EMAIL ? Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) : Validators.nullValidator]));
    })
  }

  //showing snackbar
  showSnackbarDuration(): void {
    this.snackBar.open("Successfully Submited!", "x", {duration: 2000});
  }

  //form submission
  submit(): void {
    if(this.form.valid) {
      this.formDetails.emit(this.form.value);
      this.formDirective.resetForm();
      this.showSnackbarDuration();
    }
  }
}
