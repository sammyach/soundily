import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SoundModel, SoundService } from '../sound.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('stream') playerRef!: ElementRef<HTMLAudioElement>;
  constructor(private _service: SoundService) { }

  ngOnInit(): void {
  }

  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  ngAfterViewInit() {
    this._service.$selectedSound.subscribe(res => {
      console.log('pairwize: ', res);
      const previousSoundObj = res[0];
      const currentSoundObj = res[1];
      if(currentSoundObj){
        if(previousSoundObj && (previousSoundObj == currentSoundObj) && currentSoundObj.playing){
          this.$player.pause();
          this.$player.onpause = ()=>{ currentSoundObj.playing = false; }
        }else{
          if(previousSoundObj)
            previousSoundObj.playing = false;
          currentSoundObj.playing = true;
          this.$player.src = currentSoundObj.url ?? '';
          this.$player.load();
          // this.$player.onloadeddata = ()=>{ duration = this.$player.duration; console.log('duration =>', duration); }
          this.$player.play();
          this.$player.onplay = ()=>{ currentSoundObj.playing = true; }
          // this.$player.onpause = ()=>{ currentSoundObj.playing = false; }
          // this.$player.onended = ()=>{currentSoundObj.playing = false;}
        }


      }else{
        // console.error('Audio location not found!');
        if(currentSoundObj != null)
        currentSoundObj.playing = false;
      }
    })
  }

}
