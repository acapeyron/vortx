import { Component, OnInit } from '@angular/core';
import { DisplayModalService } from '../service/display-modal/display-modal.service';

let loaded = false;

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.css']
})
export class PresetsComponent implements OnInit {
  presetDic : any;
  video: string;

  constructor(public display: DisplayModalService) {
    this.presetDic = {
      "a": "../../assets/videos/vortx.mp4", 
      "b": "../../assets/videos/surf.mp4", 
      "c": "x", 
      "d": "w", 
      "e": "v", 
      "f": "u",
      "g": "t"
    };
    this.video = "../../assets/videos/vortx.mp4";
  }

  ngOnInit(): void{
    // display help modal on first page load
    this.display.displayModal('presets', loaded);
    loaded = true;
  }
  
  show(key: any):void {
    this.video = this.presetDic[key];
  }

  deployVideo(): void{
    document.getElementById('video')!.id = 'video-deployed';
    document.getElementById('container')!.id = 'container-deployed';
  }

}
