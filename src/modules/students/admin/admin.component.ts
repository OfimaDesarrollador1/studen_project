import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-admin',
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  @ViewChild('varA') varA!: ElementRef;
  @ViewChild('varB') varB!: ElementRef;

  sumar() {
    const valorA = Number(this.varA.nativeElement.value);
    const valorB = Number(this.varB.nativeElement.value);

    if (isNaN(valorA) || isNaN(valorB)) {
      alert('Por favor, ingrese números válidos.');
      return;
    }

    const c = valorA + valorB;
    alert('Este es el resultado: ' + c);
  }
}
