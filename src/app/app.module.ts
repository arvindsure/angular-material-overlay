import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';
import { YesNoDialogComponent } from './examples/yes-no-dialog/yes-no-dialog.component';
import { SubscribeComponent } from './examples/subscribe/subscribe.component';

import { CommentsComponent } from './components/comments/comments.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatListModule,
  OverlayModule
];

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    YesNoDialogComponent,
    SubscribeComponent,
    CommentsComponent,
    CommentFormComponent,
    CommentComponent,
    FileUploadComponent
  ],
  imports: [BrowserModule, OverlayModule,FormsModule,ReactiveFormsModule, CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OverlayComponent, YesNoDialogComponent, SubscribeComponent, CommentsComponent]
})
export class AppModule {}
