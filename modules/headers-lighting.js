import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeadersLightingDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.tds = [];
        this.listeners = new Map();
    }
    /**
     * @return {?}
     */
    onMouseOver() {
        /** @type {?} */
        const table = this.elementRef.nativeElement;
        return (/**
         * @param {?} event
         * @return {?}
         */
        function onMouseOver(event) {
            /** @type {?} */
            const cellIndex = event.target.cellIndex + 1;
            if (!cellIndex || event.target === 'tr') {
                return;
            }
            /** @type {?} */
            const targetCell = table.querySelector('thead tr:not([disabled]) th:nth-child(' + cellIndex + ')');
            targetCell.classList.add('header-light');
        });
    }
    /**
     * @return {?}
     */
    onMouseOut() {
        /** @type {?} */
        const table = this.elementRef.nativeElement;
        return (/**
         * @param {?} event
         * @return {?}
         */
        function onMouseOut(event) {
            /** @type {?} */
            const cellIndex = event.target.cellIndex + 1;
            if (!cellIndex) {
                return;
            }
            /** @type {?} */
            const targetCell = table.querySelector('thead tr:not([disabled]) th:nth-child(' + cellIndex + ')');
            targetCell.classList.remove('header-light');
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const tbody = this.elementRef.nativeElement.querySelector('tbody');
        this.tds = tbody.querySelectorAll('td:not([disabled])');
        if (this.tds.length) {
            this.deployListeners();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const tbody = this.elementRef.nativeElement.querySelector('tbody');
        /** @type {?} */
        const newTds = tbody.querySelectorAll('td:not([disabled])');
        if (newTds.length !== this.tds.length) {
            this.tds = newTds;
            this.deployListeners();
        }
    }
    /**
     * @return {?}
     */
    deployListeners() {
        this.destroyListeners();
        this.initListeners();
    }
    /**
     * @return {?}
     */
    initListeners() {
        this.tds.forEach((/**
         * @param {?} td
         * @param {?} i
         * @return {?}
         */
        (td, i) => {
            if (this.listeners.has(td)) {
                /** @type {?} */
                const listener = this.listeners.get(td);
                listener.index = i;
                return;
            }
            this.listeners.set(td, {
                mouseover: this.onMouseOver(),
                mouseout: this.onMouseOut()
            });
            /** @type {?} */
            const listeners = this.listeners.get(td);
            td.addEventListener('mouseover', listeners.mouseover);
            td.addEventListener('mouseout', listeners.mouseout);
        }));
    }
    /**
     * @return {?}
     */
    destroyListeners() {
        this.listeners.forEach((/**
         * @param {?} a
         * @return {?}
         */
        (a) => {
            if (!this.listeners.has(a)) {
                return;
            }
            /** @type {?} */
            const listeners = this.listeners.get(a);
            a.removeEventListener('mouseover', listeners.mouseover);
            a.removeEventListener('mouseout', listeners.mouseout);
            this.listeners.delete(a);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyListeners();
    }
}
HeadersLightingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[headersLighting]'
            },] },
];
/** @nocollapse */
HeadersLightingDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeadersLightingModule {
}
HeadersLightingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HeadersLightingDirective],
                exports: [HeadersLightingDirective],
                imports: [],
                providers: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { HeadersLightingDirective, HeadersLightingModule };
//# sourceMappingURL=headers-lighting.js.map
