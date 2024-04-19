import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPersonalComponent } from './projects-personal.component';

describe('ProjectsPersonalComponent', () => {
  let component: ProjectsPersonalComponent;
  let fixture: ComponentFixture<ProjectsPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPersonalComponent]
    });
    fixture = TestBed.createComponent(ProjectsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
