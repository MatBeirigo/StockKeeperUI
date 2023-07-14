import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'modalSaida',
  templateUrl: './modalSaida.component.html',
  styleUrls: ['./modalSaida.component.scss']
})
export class ModalSaidaComponent {

  constructor(public modalRef: MdbModalRef<ModalSaidaComponent>) {}
}
