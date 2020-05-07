import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19ShellComponent } from './covid19-shell.component';

describe('Covid19ShellComponent', () => {
  let component: Covid19ShellComponent;
  let fixture: ComponentFixture<Covid19ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19ShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
