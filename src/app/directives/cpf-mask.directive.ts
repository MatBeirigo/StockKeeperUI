import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCpfMask]'
})
export class CpfMaskDirective {

    constructor(private elementRef: ElementRef) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const cpf = event.target.value.replace(/\D/g, '');
        if (cpf.length <= 11) {
            event.target.value = this.cpfMask(cpf);
        } else {
            event.target.value = cpf.substring(0, 11);
        }
    }

    cpfMask(value: string): string {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
}