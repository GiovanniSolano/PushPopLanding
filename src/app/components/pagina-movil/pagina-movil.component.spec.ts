import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMovilComponent } from './pagina-movil.component';

describe('PaginaMovilComponent', () => {
  let component: PaginaMovilComponent;
  let fixture: ComponentFixture<PaginaMovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaMovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
