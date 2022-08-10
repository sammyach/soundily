import { Component, ElementRef, ViewChild } from '@angular/core';
import { SoundModel, SoundService } from './sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soundily';
  data: SoundModel[]=[];

  constructor(private _service: SoundService){}
  ngOnInit(): void {
    this.data = this._service.getData();
  }




}
