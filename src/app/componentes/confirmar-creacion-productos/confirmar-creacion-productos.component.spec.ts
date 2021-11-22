import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCreacionProductosComponent } from './confirmar-creacion-productos.component';

describe('ConfirmarCreacionProductosComponent', () => {
  let component: ConfirmarCreacionProductosComponent;
  let fixture: ComponentFixture<ConfirmarCreacionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarCreacionProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarCreacionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
