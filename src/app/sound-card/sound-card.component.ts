import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoundModel, SoundService } from '../sound.service';

@Component({
  selector: 'app-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss']
})
export class SoundCardComponent implements OnInit {

  @Input() SoundObj!: SoundModel;

  constructor(public _service: SoundService) { }

  ngOnInit(): void {
  }

  play(obj: any){
    this._service.loadSelectedSound(obj);
  }

}
