import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'modalEntrada',
  templateUrl: './modalEntrada.component.html',
  styleUrls: ['./modalEntrada.component.scss']
})
export class ModalEntradaComponent {

  constructor(public modalRef: MdbModalRef<ModalEntradaComponent>) {}
}
