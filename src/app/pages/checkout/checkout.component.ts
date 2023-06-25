import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(public menuService: MenuService) 
  { 

  }

  ngOnInit() {
    this.menuService.menuSelecionado = 40;
  }
}
