import {Directive, ElementRef, Input, OnInit, OnChanges} from '@angular/core';

/**
 * Directive to wrap bootstrap-select
 */
@Directive({
    selector: '[appSubLoading]'
})
export class SubLoadingDirective implements OnInit, OnChanges {
    @Input('open')
    public open = false;
    private el;

    constructor(private elref: ElementRef) {
        this.el = elref.nativeElement;
    }

    ngOnInit() {
        const htmlstr = '<div class="data-loading"><span style="margin: auto;">' +
            '<i class="fa fa-refresh fa-spin"></i></span></div>';
        this.el.insertAdjacentHTML('afterbegin', htmlstr);
        this.control();
    }

    ngOnChanges(changes) {
        if (changes.open) {
            this.control();
        }
    }

    private control() {
        if (this.open) {
            console.log('open');
        } else {
            console.log('close');
        }
    }
}
