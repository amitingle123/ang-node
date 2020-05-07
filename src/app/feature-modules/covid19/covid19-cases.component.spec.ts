import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19CasesComponent } from './covid19-cases.component';

describe('Covid19CasesComponent', () => {
  let component: Covid19CasesComponent;
  let fixture: ComponentFixture<Covid19CasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19CasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19CasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
