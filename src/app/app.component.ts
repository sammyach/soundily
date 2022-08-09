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

  playing = false;
  @ViewChild('stream') playerRef!: ElementRef<HTMLAudioElement>;

  constructor(private _service: SoundService){}
  ngOnInit(): void {
    this.data = this._service.getData();
  }

  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  ngAfterViewInit() {
    let duration: any;
    this._service.$selectedSound.subscribe(res => {
      res.playing = true;
      if(res.url){
        this.$player.src = res.url ?? '';
        this.$player.load();
        // this.$player.onloadeddata = ()=>{ duration = this.$player.duration; console.log('duration =>', duration); }

        this.$player.play();
        this.$player.onended = ()=>{res.playing = false;}

      }else{
        // console.error('Audio location not found!');
        res.playing = false;
      }
    })
  }
}
