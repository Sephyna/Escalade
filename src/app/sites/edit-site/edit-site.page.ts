import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.page.html',
  styleUrls: ['./edit-site.page.scss'],
})
export class EditSitePage implements OnInit {

  constructor(public alertController: AlertController) { }

  async deleteSecteur() {
    const alert = await this.alertController.create({
      cssClass: 'delete-message',
      header: 'Attention',
      message: 'Etes-vous sûr de vouloir supprimer ce site ?',
      buttons: ['Annuler','OK']
    });
    await alert.present();}

  ngOnInit() {
  }

}
