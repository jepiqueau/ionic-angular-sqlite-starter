import { Injectable } from '@angular/core';

import { SQLiteService } from './sqlite.service';
import { AuthorPostsService } from './author-posts.service';
import { Toast } from '@capacitor/toast';

@Injectable()
export class InitializeAppService {
  isAppInit: boolean = false;
  platform!: string;

  constructor(
    private sqliteService: SQLiteService,
    private authorPostsService: AuthorPostsService) {

  }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      this.platform = this.sqliteService.platform;

      try {
        if( this.sqliteService.platform === 'web') {
          await this.sqliteService.initWebStore();
        }
        // Initialize the starter_posts database
        await this.authorPostsService.initializeDatabase();
        // Initialize any other database if any
        this.isAppInit = true;

      } catch (error) {
        console.log(`initializeAppError: ${error}`);
        await Toast.show({
          text: `initializeAppError: ${error}`,
          duration: 'long'
        });
      }
    });
  }

}
