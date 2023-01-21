import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { ModalController } from '@ionic/angular';
import { PostsPage } from 'src/app/pages/author-posts/posts/posts.page';
import { EmployeesPage } from 'src/app/pages/employee-dept/employees/employees.page';
import { InitializeAppService } from 'src/app/services/initialize.app.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isListDisplay: boolean = false;
  isAndroid: boolean = false;

  constructor(private initAppService: InitializeAppService,
    private modalCtrl: ModalController) {
      this.isListDisplay = this.initAppService.isAppInit;
  }
  ngOnInit() {
    if (this.initAppService.platform === 'android') {
      this.isAndroid = true;
    }

  }
  async authorpostsClick() {
    const modal = await this.modalCtrl.create({
      component: PostsPage,
      canDismiss: true
    });
    modal.present();
  }
  async employeesClick() {
    const modal = await this.modalCtrl.create({
      component: EmployeesPage,
      canDismiss: true
    });
    modal.present();
  }

  exitApp() {
    App.exitApp();
  }

}
