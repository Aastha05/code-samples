import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATableComponent } from './a-table.component';

describe('ATableComponent', () => {
  let component: ATableComponent;
  let fixture: ComponentFixture<ATableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
