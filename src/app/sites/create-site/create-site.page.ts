import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SitesService } from 'src/app/services/sites.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ISite } from 'src/app/interfaces/site';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.page.html',
  styleUrls: ['./create-site.page.scss'],
})
export class CreateSitePage implements OnInit {
  private createSiteForm : FormGroup;
  private image : File;
  private newSite : ISite;


  changeListenerImage($event) : void {
    this.image = $event.target.files[0];

}

  
constructor(private formBuilder : FormBuilder, 
            private siteService : SitesService, 
            private toastController: ToastController, 
            private router : Router) { 
  this.createSiteForm = this.formBuilder.group({
    nom : new FormControl("", [Validators.maxLength(100),Validators.required,Validators.pattern('([a-zA-Z0-9-\.+#=?!%éèêàù\*\,\;\:\ ]{0,100})?')]),
    milieu : ["",Validators.required],
    altitude : [null,[Validators.maxLength(5),Validators.pattern('[0-9]{0,5}')]],
    roche : [null],
    description : [null,[Validators.maxLength(1000),Validators.pattern('([a-zA-Z0-9-\.+#=?!%éèêàù\*\,\;\:\ ]{0,1000})?')]],
    acces : [null,[Validators.maxLength(1000),Validators.pattern('([a-zA-Z0-9-\.+#=?!%éèêàù\*\,\;\:\ ]{0,1000})?')]],
    image : [null,[Validators.maxLength(1024)]],
    adresse : this.formBuilder.group({
      latitude : [null,Validators.pattern('[0-9]{1}([\.][0-9]{0,9})?')],
      longitude : [null,Validators.pattern('[0-9]{1,2}([\.][0-9]{0,9})?')],
      numAdresse : [null,[Validators.maxLength(5),Validators.pattern('[0-9]{0,5}')]],
      voieAdresse : [null,[Validators.maxLength(100),Validators.pattern('([a-zA-Z0-9-\.+#=?!%éèêàù\*\,\;\:\ ]{0,100})?')]],
      cpAdresse : [null,[Validators.maxLength(5),Validators.pattern('[0-9]{0,5}')]],
      villeAdresse : ["", [Validators.maxLength(100),Validators.required,Validators.pattern('([a-zA-Z0-9-\.+#=?!%éèêàù\*\,\;\:\ ]{0,100})?')]],
    })
  })
}
   public errorMessage =  {
    nom : [
      {type : 'required', message : 'Nom du site obligatoire.'},
      {type : 'pattern' , message : 'Caractère incorrect.'},
      {type : 'maxLength' , message : 'Nombre  maximum de caractère: 100.'},
    ],
    milieu : [
      {type : 'required', message : 'Veuillez sélectionner un type de milieu.'},
    ],
    altitude : [
      {type : 'pattern', message : 'Seul les chiffres sont autorisés.'},
      {type : 'maxLength' , message : 'Nombre maximum de chiffre : 5'},
    ],
    description : [
      {type : 'pattern', message : 'Caractère non autorisé.'},
      {type : 'maxLength' , message : 'Nombre  maximum de caractère: 1000'},
    ],
    acces : [
      {type : 'pattern', message : 'Caractère non autorisé.'},
      {type : 'maxLength' , message : 'Nombre  maximum de caractère: 1000'},
    ],
    latitude: [
     {type : 'pattern', message : 'exemple : 1.11225554'},
    ],
    longitude: [
      {type : 'pattern', message : 'exemple : 1.11225554'},
    ],
    numAdresse: [
      {type : 'pattern', message : 'Seul les chiffres sont autorisés.'},
      {type : 'maxLength' , message : 'Nombre maximum de chiffre : 5.'},
    ],
    voieAdresse: [
      {type : 'pattern', message : 'Caractère non autorisé.'},
      {type : 'maxLength' , message : 'Nombre maximum de caractère : 100.'},
    ],
    cpAdresse: [
      {type : 'pattern', message : 'Seul les chiffres sont autorisés.'},
      {type : 'maxLength' , message : 'Nombre maximum de chiffre : 5.'},
    ],
    villeAdresse: [
      {type : 'required', message : 'Ville obligatoire.'},
      {type : 'pattern' , message : 'Caractère incorrect.'},
      {type : 'maxLength' , message : 'Nombre  maximum de caractère: 100.'},
    ],
  }


  submit()
  {
    if(this.createSiteForm.valid)
    { 
      if(this.createSiteForm.value.image) 
      {
        this.createSiteForm.patchValue({
        image : this.image
        })
      }
      console.log(this.createSiteForm.value);
      this.siteService.createSite(this.createSiteForm.value).subscribe(value => {
        this.newSite = value;
        console.log(value);
        this.siteCreateMessage();
        this.router.navigate(['tabs']);
      })
    }
  
  }
  async siteCreateMessage() {
    const toast = await this.toastController.create({
        message: 'Site correctement enregistré',
        duration: 2000
    });
    toast.present();
}


  ngOnInit() 
  {
  }


}
