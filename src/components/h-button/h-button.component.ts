import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h-button',
  imports: [],
  templateUrl: './h-button.component.html',
  styleUrl: './h-button.component.scss'
})
export class HButtonComponent {
  @Input() labelBtn: string = "";

}
