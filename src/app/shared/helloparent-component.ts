import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    templateUrl: './helloparent-component.html'
})

export class HelloParentComponent implements OnInit,OnChanges{
    constructor(){}
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
       console.log('HelloParentComponent _ On changes');
    }
    ngOnInit(): void {
        console.log('HelloParentComponent _ On INIT');
    }

    ng = 'Angular';
    myName = 'neo';

    handleEventClicked(data) {
        console.log('Received: '+data);
    }

}