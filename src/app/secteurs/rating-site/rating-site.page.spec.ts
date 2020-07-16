import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingSitePage } from './rating-site.page';

describe('RatingSitePage', () => {
  let component: RatingSitePage;
  let fixture: ComponentFixture<RatingSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
