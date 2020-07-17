import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateSitePage } from './create-site.page';

describe('CreateSitePage', () => {
  let component: CreateSitePage;
  let fixture: ComponentFixture<CreateSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
