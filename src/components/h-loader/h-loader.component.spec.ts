import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HLoaderComponent } from './h-loader.component';

describe('HLoaderComponent', () => {
  let component: HLoaderComponent;
  let fixture: ComponentFixture<HLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
