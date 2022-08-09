import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SoundModel{
  name?: string;
  url?: string;
  playing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private selectedSound: BehaviorSubject<SoundModel> = new BehaviorSubject<SoundModel>({});
  get $selectedSound(){
    return this.selectedSound.asObservable();
  }

  constructor() { }

  loadSelectedSound(data: any){
    this.selectedSound.next(data);
  }
  getData(){
    const data: SoundModel[] = [
      {
        name: 'Bird chirping 1',
        url: 'assets/audio/bird-chirping.ogg',
        playing: false
      },
      {
        name: 'Bird chirping 2',
        url: 'assets/audio/bird-chirping-2.ogg',
        playing: false
      },
      {
        name: 'Wind',
        url: 'assets/audio/wind.ogg',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      },
      {
        name: 'Car honk',
        playing: false
      }
    ];

    return data;
  }
}
