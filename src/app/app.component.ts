import { Component, TemplateRef } from '@angular/core';
import { OverlayService } from './overlay.service';
import { ComponentType } from '@angular/cdk/portal';
import { YesNoDialogComponent } from './examples/yes-no-dialog/yes-no-dialog.component';
import { SubscribeComponent } from './examples/subscribe/subscribe.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentComponent } from './components/comments/comment/comment.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = 'A simple string content modal overlay';
  yesNoComponent = YesNoDialogComponent;
  subscribeComponent = SubscribeComponent;
  commentsComponent = CommentsComponent;

  subscribeData = null;
  yesNoComponentResponse = null;
  yesNoTemplateResponse = null;

  constructor(private overlayService: OverlayService) {}

  open(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.overlayService.open(content, null);

    ref.afterClosed$.subscribe(res => {
      if (typeof content === 'string') {
      } else if (content === this.yesNoComponent) {
        this.yesNoComponentResponse = res.data;
      } else if (content === this.subscribeComponent) {
        this.subscribeData = res.data;
      } else {
        this.yesNoTemplateResponse = res.data;
      }
    });
  }
}
