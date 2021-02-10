import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message: string, action: any, duration: number): void {
    this.snackbar.open(message, action, { duration });
  }
}