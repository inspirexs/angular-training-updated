import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsResultComponent } from './docs-result.component';

describe('DocsResultComponent', () => {
  let component: DocsResultComponent;
  let fixture: ComponentFixture<DocsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
