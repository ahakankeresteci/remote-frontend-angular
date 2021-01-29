import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Injectable()
export class JobadValidator {

    jobadForm : FormGroup

    constructor(private fb: FormBuilder) {
        this.createForm()
    }

    createForm() {
        this.jobadForm = this.fb.group({
            title: ['', Validators.required],
            content: ['',Validators.required],
            price: ['',[Validators.required,Validators.pattern("^[0-9]+$")]]
        })

    }
}
