import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCrearUsuariosComponent } from './confirmar-crear-usuarios.component';

describe('ConfirmarCrearUsuariosComponent', () => {
  let component: ConfirmarCrearUsuariosComponent;
  let fixture: ComponentFixture<ConfirmarCrearUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarCrearUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarCrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
