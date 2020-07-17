import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateSecteurPage } from './create-secteur.page';

describe('CreateSecteurPage', () => {
  let component: CreateSecteurPage;
  let fixture: ComponentFixture<CreateSecteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSecteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
