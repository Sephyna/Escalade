import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-secteur',
  templateUrl: './edit-secteur.page.html',
  styleUrls: ['./edit-secteur.page.scss'],
})
export class EditSecteurPage implements OnInit {

  constructor(public alertController: AlertController) { }

 async deleteSecteur() {
  const alert = await this.alertController.create({
    cssClass: 'delete-message',
    header: 'Attention',
    message: 'Etes-vous sûr de vouloir supprimer ce secteur ?',
    buttons: ['Annuler','OK']
  });
  await alert.present();}

  ngOnInit() {
  }

}
