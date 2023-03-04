import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNestedComponent } from './sub-nested.component';

describe('SubNestedComponent', () => {
  let component: SubNestedComponent;
  let fixture: ComponentFixture<SubNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
