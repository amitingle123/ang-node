import { Directive, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective implements AfterViewInit {
    @Input() threshold: number;
     
    constructor(private elementRef : ElementRef){       
    }

    ngAfterViewInit(): void {  
        // this.elRef.nativeElement.style.color = this.inputColor; 
        let temp :number = this.elementRef.nativeElement.innerHTML;
        if(temp > this.threshold){
            this.elementRef.nativeElement.style.color="red";
        }
       
    }  
}