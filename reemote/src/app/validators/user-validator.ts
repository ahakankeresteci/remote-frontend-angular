import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Injectable()
export class UserFormValidator {

    
    userUpdateForm: FormGroup
    userRegistrationForm: FormGroup

    

    constructor(private fb: FormBuilder) {
        this.createForm()
    }

    createForm() {
        this.userUpdateForm = this.fb.group({
            user_name: ['', [Validators.required,Validators.minLength(4)]],
            first_name: ['',[Validators.required,Validators.minLength(2)]],
            last_name: ['',[Validators.required,Validators.minLength(2)]],
            location: [''],
            job: [''],
            website: ['']
        })

        this.userRegistrationForm = this.fb.group({
            user_name: ['', [Validators.required,Validators.minLength(4)]],
            first_name: ['',[Validators.required,Validators.minLength(2)]],
            last_name: ['',[Validators.required,Validators.minLength(2)]],
            email: ['',[Validators.required,Validators.email]],
            password: ['',[Validators.required,Validators.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$")]]
            //1 Rakam içermeli
            //Küçük harf içermeli
            //Büyük harf içermeli
            //Özel Karakter İçermeli
            //8-32 karakter uzunluğu

        })
    }

    

}
