import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerProgressionEntryComponent } from './computer-progression-entry.component';

describe('ComputerProgressionEntryComponent', () => {
  let component: ComputerProgressionEntryComponent;
  let fixture: ComponentFixture<ComputerProgressionEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerProgressionEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerProgressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
