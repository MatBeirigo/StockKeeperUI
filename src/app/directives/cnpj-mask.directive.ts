import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCnpjMask]'
})
export class CnpjMaskDirective {

    constructor(private elementRef: ElementRef) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const cnpj = event.target.value.replace(/\D/g, '');
        if (cnpj.length <= 14) {
            event.target.value = this.cnpjMask(cnpj);
        } else {
            event.target.value = cnpj.substring(0, 14);
        }
    }

    cnpjMask(value: string): string {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
}