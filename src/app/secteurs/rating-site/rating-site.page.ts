import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-rating-site',
  templateUrl: './rating-site.page.html',
  styleUrls: ['./rating-site.page.scss'],
})
export class RatingSitePage implements OnInit {

  constructor(private toastController : ToastController, private popoverController : PopoverController) { }

  closePopover() {
  this.popoverController.dismiss({'dismissed' : true});
}

async updateMessage() {
  const toast = await this.toastController.create({
      message: 'Vous avez bien attribué une note pour ce site.',
      duration: 2000
  });
  toast.present();
}
  

  @Input()
  rate: number;
 
  @Input ()
  selectStar : boolean;
  
    ngOnInit() {
     this.selectStar = false;
  }
  
  onClick(rate) {
    this.rate = rate;
    console.log(this.rate);
    this.selectStar = true;
  }
 
  addRatingSite () {
    this.updateMessage();
    this.closePopover();
    console.log(this.rate);
    
    
  }


 
}
