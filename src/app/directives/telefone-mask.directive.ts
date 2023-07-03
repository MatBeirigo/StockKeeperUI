import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appTelefoneMask]'
})
export class TelefoneMaskDirective {

    constructor(private elementRef: ElementRef) { }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        const telefone = event.target.value.replace(/\D/g, '');
        if (telefone.length <= 11) {
            event.target.value = this.telefoneMask(telefone);
        } else {
            event.target.value = telefone.substring(0, 11);
        }
    }

    telefoneMask(value: string): string {
        if (value.length <= 10) {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
    }
}