import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PicResultViewerComponent } from '../pic-result-viewer/pic-result-viewer.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    private readonly notificationDurationInSeconds = 6;

    constructor( private snackBar: MatSnackBar) {}

    showSimpleNotificationMessage(message: string) : void {
        this.snackBar.open(message);
    }

    showPicResultNotification() {
      this.snackBar.openFromComponent(PicResultViewerComponent, {
        duration: this.notificationDurationInSeconds * 1000
      });
    }
}
