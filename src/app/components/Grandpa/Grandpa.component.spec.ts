import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpaComponent } from './Grandpa.component';

describe('GrandpaComponent', () => {
  let component: GrandpaComponent;
  let fixture: ComponentFixture<GrandpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
