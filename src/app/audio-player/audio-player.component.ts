import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SoundModel, SoundService } from '../sound.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('stream') playerRef!: ElementRef<HTMLAudioElement>;
  currentSoundObj: any;
  duration: any;
  volume: any = 0.5;
  muted = false;
  constructor(public _service: SoundService) { }

  ngOnInit(): void {
  }

  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  ngAfterViewInit() {


    this._service.$selectedSound.subscribe(res => {
      console.log('pairwize: ', res);
      const previousSoundObj = res[0];
      this.currentSoundObj = res[1];
      if(this.currentSoundObj){
        if(previousSoundObj && (previousSoundObj == this.currentSoundObj) && this.currentSoundObj.playing){
          this.$player.pause();
          this.$player.onpause = ()=>{ this.currentSoundObj.playing = false; }
        }else{
          if(previousSoundObj)
            previousSoundObj.playing = false;
            this.currentSoundObj.playing = true;
          this.$player.src = this.currentSoundObj.url ?? '';
          this.$player.load();
          this.$player.onloadeddata = ()=>{ this.duration = this.$player.duration; this.duration = this.calculateTime(this.duration); console.log('duration =>', this.duration); }
          this.$player.play();
          this.$player.onplay = ()=>{ this.currentSoundObj.playing = true; }

          // this.$player.onpause = ()=>{ currentSoundObj.playing = false; }
          // this.$player.onended = ()=>{currentSoundObj.playing = false;}
        }


      }else{
        // console.error('Audio location not found!');
        if(this.currentSoundObj != null)
        this.currentSoundObj.playing = false;
      }
    })
  }

  updateVolume(event: any){

    this.volume = event.target.value;
    this.$player.volume = this.volume;
    console.log('vol ', this.volume);
  }

  toggleMute(){
    if(this.volume > 0){
      this.muted = true;
      this.$player.volume = 0.0;
      this.volume = 0;
    }
    else{
      this.muted = false
      this.$player.volume = this.volume = 0.5;
    }

  }

  private calculateTime(secs: any){
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }

}
