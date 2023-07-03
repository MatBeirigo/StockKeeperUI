import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCepMask]'
})
export class CepMaskDirective {

    constructor(private elementRef: ElementRef) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const cep = event.target.value.replace(/\D/g, '');
        if (cep.length <= 8) {
            event.target.value = this.cepMask(cep);
        } else {
            event.target.value = cep.substring(0, 8);
        }
    }

    cepMask(value: string): string {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d{3})/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }
}