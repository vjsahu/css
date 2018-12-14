import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReusableFunctionComponent } from './create-reusable-function.component';

describe('CreateReusableFunctionComponent', () => {
  let component: CreateReusableFunctionComponent;
  let fixture: ComponentFixture<CreateReusableFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReusableFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReusableFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
