import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NombrepagePage } from './nombrepage.page';

describe('NombrepagePage', () => {
  let component: NombrepagePage;
  let fixture: ComponentFixture<NombrepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NombrepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
