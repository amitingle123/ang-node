import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'hello',
    template: `
        <button class="btn btn-primary" (click)="clickMe()">CliclMe
        </button>
        {{myFriend}}
    `
})

export class HelloComponent {
    constructor() { }

    @Input() myFriend: string;
    @Output() onClick = new EventEmitter();

    clickMe(){
        console.log('clicked');
        this.onClick.emit('amit');
    }
}