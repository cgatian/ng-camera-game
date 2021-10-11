import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PicColor } from 'src/app/interfaces/PicColor';
import { OptionsService } from 'src/app/services/options-service';

@Component({
  selector: 'app-pic-color-canvas',
  templateUrl: './pic-color-canvas.component.html',
  styleUrls: ['./pic-color-canvas.component.css']
})
export class PicColorCanvasComponent implements OnInit {

  @Input() PicColor! : PicColor;
  @Output() PicColorChange = new EventEmitter<PicColor>();

  constructor(private optionsService: OptionsService) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
