import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistryEditComponent } from './form-registry-edit.component';

describe('FormRegistryEditComponent', () => {
  let component: FormRegistryEditComponent;
  let fixture: ComponentFixture<FormRegistryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
