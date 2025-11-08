import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUpdateComponent } from './api-update.component';

describe('ApiUpdateComponent', () => {
  let component: ApiUpdateComponent;
  let fixture: ComponentFixture<ApiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
