import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-universal-firebase';
  renderer = '';

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    this.renderer = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
  }
}
