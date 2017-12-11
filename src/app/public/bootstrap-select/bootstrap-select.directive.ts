import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';

declare const jQuery: any;

/**
 * Directive to wrap bootstrap-select
 */
@Directive({
    selector: '[appBootstrapSelect]'
})
export class BootstrapSelectDirective implements OnInit, OnDestroy {
    @Input('arroption')
    public arroption = [];
    private el;

    constructor(private elref: ElementRef) {
        this.el = elref.nativeElement;
    }

    ngOnInit() {
        jQuery(this.el).selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        });

        let options = '';
        jQuery.each(this.arroption, function (key, value) {
            options += '<option value=' + key + '>' + value + '</option>';
        });
        jQuery(this.el).empty();
        jQuery(this.el).append(options);
        jQuery(this.el).selectpicker('refresh');
    }

    ngOnDestroy() {
        jQuery(this.el).selectpicker('destroy');
    }

    refresh() {
        jQuery(this.el).selectpicker('refresh');
    }
}
