import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from '../home/home.module';

import { FormContactComponent } from './form-contact.component';

describe('FormContactComponent', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HomeModule],
      declarations: [ FormContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
