import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA']
  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    const tasasDeCambio:any = {
        USD: {
            USD: 1,
            EUR: 0.84,
            LIBRA: 0.75
        },
        EUR: {
            USD: 1.20,
            EUR: 1,
            LIBRA: 0.9
        },
        LIBRA: {
            USD: 1.33,
            EUR: 1.11,
            LIBRA: 1
        }
    };

    if (tasasDeCambio[this.tengo] && tasasDeCambio[this.tengo][this.quiero]) {
        this.total = this.cantidad * tasasDeCambio[this.tengo][this.quiero];
    } else {
        console.error("Conversión no soportada");
        this.total = 0;
    }
}

}
