import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version = '13';

  constructor(private swUpdate: SwUpdate) {
    this.observeVersions();
  }

  private observeVersions() {
    if (!this.swUpdate.isEnabled) {
      return;
    }
    this.swUpdate.available.subscribe(
      () => {
        const msg = 'Hay una actualización disponible, ¿Actualizar?';
        if (confirm(msg)) {
          window.location.reload();
        }
      }
    );
  }

}
