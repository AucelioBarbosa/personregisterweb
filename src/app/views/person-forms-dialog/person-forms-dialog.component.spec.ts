import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormsDialogComponent } from './person-forms-dialog.component';

describe('PersonFormsDialogComponent', () => {
  let component: PersonFormsDialogComponent;
  let fixture: ComponentFixture<PersonFormsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonFormsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
