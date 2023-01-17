import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthorPostsService } from 'src/app/services/author-posts.service';
import { SQLiteService } from 'src/app/services/sqlite.service';
import { Author } from 'src/app/models/author-posts';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {
  @Input() selectAuthor!: Author;

  updAuthor!: Author;
  private authorEL: any;

  constructor(private authorPostsService: AuthorPostsService,
    private modalCtrl: ModalController,
    private sqliteService: SQLiteService,
    private elementRef : ElementRef) {

  }

  ngOnInit() {
    this.authorEL = this.elementRef.nativeElement.querySelector(`#authors-cmp-author`);
  }
  // Private functions
  /**
   * Close
   */
  async close() {
    // check if selectAuthor still exists
    if(!this.selectAuthor) {
      return this.modalCtrl.dismiss(null, 'close');
    }
    const autExist: Author = await this.authorPostsService.getAuthor(this.selectAuthor);

    if(autExist && autExist.id > 0) {
      return this.modalCtrl.dismiss(autExist, 'close');
    } else {
      return this.modalCtrl.dismiss(null, 'close');
    }
  }
  /**
   * handle the outAuthor Event from cmp-author component
   * @param author
   * @returns
   */
  async handleOutAuthor(author:Author) {
    if(author && author.id > 0) {
      const mAuthor: Author = author;
      try {
        const updAuthor = await this.authorPostsService.getAuthor(mAuthor);
        await this.authorPostsService.getAllAuthors();
        await this.authorPostsService.getAllIdsSeq();
        if (this.sqliteService.platform === 'web') {
          // save the databases from memory to store
          await this.sqliteService.sqliteConnection.saveToStore(this.authorPostsService.databaseName);
        }
        this.authorEL.classList.add('hidden');
      } catch (err: any) {
        const msg = err.message ? err.message : err;
        console.log(`onSubmit Update Author: ${err}`);
        await Toast.show({
          text: `onSubmit Update Author: ${err} `,
          duration: 'long'
        });
      }
    } else {
      await Toast.show({
        text: `onSubmit Update Author: id <= 0 `,
        duration: 'long'
      });
    }
  }
  /**
   * handle the toUpdateAuthor Event from cmp-authors component
   * @param author
   * @returns
   */
  async handleToUpdateAuthor(data:any) {
    if(this.sqliteService.platform === 'web') {
      await this.sqliteService.sqliteConnection.saveToStore(data.database);
    }
    if(data.command === 'update') {
      this.updAuthor = data.author;
      this.authorEL.classList.remove('hidden');
    }
  }

}
