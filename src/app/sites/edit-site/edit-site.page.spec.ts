import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSitePage } from './edit-site.page';

describe('EditSitePage', () => {
  let component: EditSitePage;
  let fixture: ComponentFixture<EditSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
