import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecteursPage } from './secteurs.page';

describe('SecteursPage', () => {
  let component: SecteursPage;
  let fixture: ComponentFixture<SecteursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecteursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
