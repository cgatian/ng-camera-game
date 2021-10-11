import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options-service';
import {ThemePalette} from '@angular/material/core';
import { PicColorState } from 'src/app/interfaces/PicColorState';
import { PicColor } from 'src/app/interfaces/PicColor';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.css']
})
export class OptionsPanelComponent implements OnInit {
  primaryThemeColor: ThemePalette = 'primary';

  picColors: PicColor[] = [];
  picColorStates: PicColorState[] = [];
  constructor(private optionsService: OptionsService) {
  }

  ngOnInit(): void {
    this.picColors = this.picColorStates = this.optionsService.getPicColorStates();
  }
}
