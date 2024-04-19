import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCompanyComponent } from './projects-company.component';

describe('ProjectsCompanyComponent', () => {
  let component: ProjectsCompanyComponent;
  let fixture: ComponentFixture<ProjectsCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsCompanyComponent]
    });
    fixture = TestBed.createComponent(ProjectsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
