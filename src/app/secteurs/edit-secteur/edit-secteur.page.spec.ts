import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSecteurPage } from './edit-secteur.page';

describe('EditSecteurPage', () => {
  let component: EditSecteurPage;
  let fixture: ComponentFixture<EditSecteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSecteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
