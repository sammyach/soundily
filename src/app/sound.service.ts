import { Injectable } from '@angular/core';
import { BehaviorSubject, pairwise, startWith } from 'rxjs';

export interface SoundModel{
  name?: string;
  url?: string;
  playing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private selectedSound: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  get $selectedSound(){
    return this.selectedSound.asObservable().pipe(//so we can get both previous and current values
      startWith(null),
      pairwise());
  }

  constructor() { }

  loadSelectedSound(data: any){
    console.log('loaded ',data);

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
        name: 'Cock crowing',
        url: 'assets/audio/cock-crowing.ogg',
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
