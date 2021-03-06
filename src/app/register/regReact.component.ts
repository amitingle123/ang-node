import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Register } from './register';
import { debounceTime } from 'rxjs/operators';


function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('email');
    const confirmEmailControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmEmailControl.pristine) {
        return null;
    }

    if (emailControl.value === confirmEmailControl.value) {
        return null;
    }

    return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value != null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { "range": true };
        } else {
            return null;
        }
    }
}
@Component({
    selector: 'app-regreact',
    templateUrl: './regReact.component.html',

})
export class RegReactComponent implements OnInit {

    customerForm: FormGroup;
    customer = new Register();
    today = new Date();
    emailMessage: string;

    get addresses(): FormArray{
        return <FormArray>this.customerForm.get('addresses');
    }

    private validationMessages = {
        required: 'Please enter your email address',
        email: 'Please enter valid email address',
    }

    constructor(private fb: FormBuilder) {
        this.today.setDate(this.today.getDate());
    }

    ngOnInit(): void {

        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.email]],
                confirmEmail: ['', Validators.required]
            }, { validators: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: [null, ratingRange(1, 5)],
            sendCatalog: [true],
            addresses: this.fb.array([this.buildAddresses()])
        });

        this.customerForm.get('notification').valueChanges.subscribe(
            value => this.setNotification(value)
        );

        const emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.pipe(
            debounceTime(1000)
        ).subscribe(
            value => this.setMessage(emailControl)
        );
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
    }

    save() {
        console.log(this.customerForm);
        console.log('saved' + JSON.stringify(this.customerForm.value));
    }

    populateTestData() {
        // this.customerForm.patchValue({
        //     firstName: 'Amit',
        //     lastName: 'Ingle'
        //     // email:'hello@gmail.com',
        //     // sendCatalog: false

        // });
    }

    setMessage(c: AbstractControl): void {
        console.log('testing' + c.dirty);
        this.emailMessage = '';
        if ((c.dirty || c.touched) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(
                key => this.validationMessages[key]
            ).join(' ');

        }
    }

    buildAddresses(): FormGroup {
        return this.fb.group({
            addressType: 'home',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    addAddress() : void {
        this.addresses.push(this.buildAddresses());
    }

}

