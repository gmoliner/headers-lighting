import { Directive, ElementRef, NgModule } from '@angular/core';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeadersLightingDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function HeadersLightingDirective(elementRef) {
        this.elementRef = elementRef;
        this.tds = [];
        this.listeners = new Map();
    }
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.onMouseOver = function () {
        /** @type {?} */
        var table = this.elementRef.nativeElement;
        return ( /**
         * @param {?} event
         * @return {?}
         */function onMouseOver(event) {
            /** @type {?} */
            var cellIndex = event.target.cellIndex + 1;
            if (!cellIndex || event.target === 'tr') {
                return;
            }
            /** @type {?} */
            var targetCell = table.querySelector('thead tr:not([disabled]) th:nth-child(' + cellIndex + ')');
            targetCell.classList.add('header-light');
        });
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.onMouseOut = function () {
        /** @type {?} */
        var table = this.elementRef.nativeElement;
        return ( /**
         * @param {?} event
         * @return {?}
         */function onMouseOut(event) {
            /** @type {?} */
            var cellIndex = event.target.cellIndex + 1;
            if (!cellIndex) {
                return;
            }
            /** @type {?} */
            var targetCell = table.querySelector('thead tr:not([disabled]) th:nth-child(' + cellIndex + ')');
            targetCell.classList.remove('header-light');
        });
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.ngAfterViewInit = function () {
        /** @type {?} */
        var tbody = this.elementRef.nativeElement.querySelector('tbody');
        this.tds = tbody.querySelectorAll('td:not([disabled])');
        if (this.tds.length) {
            this.deployListeners();
        }
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.ngAfterViewChecked = function () {
        /** @type {?} */
        var tbody = this.elementRef.nativeElement.querySelector('tbody');
        /** @type {?} */
        var newTds = tbody.querySelectorAll('td:not([disabled])');
        if (newTds.length !== this.tds.length) {
            this.tds = newTds;
            this.deployListeners();
        }
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.deployListeners = function () {
        this.destroyListeners();
        this.initListeners();
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.initListeners = function () {
        var _this = this;
        this.tds.forEach(( /**
         * @param {?} td
         * @param {?} i
         * @return {?}
         */function (td, i) {
            if (_this.listeners.has(td)) {
                /** @type {?} */
                var listener = _this.listeners.get(td);
                listener.index = i;
                return;
            }
            _this.listeners.set(td, {
                mouseover: _this.onMouseOver(),
                mouseout: _this.onMouseOut()
            });
            /** @type {?} */
            var listeners = _this.listeners.get(td);
            td.addEventListener('mouseover', listeners.mouseover);
            td.addEventListener('mouseout', listeners.mouseout);
        }));
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.destroyListeners = function () {
        var _this = this;
        this.listeners.forEach(( /**
         * @param {?} a
         * @return {?}
         */function (a) {
            if (!_this.listeners.has(a)) {
                return;
            }
            /** @type {?} */
            var listeners = _this.listeners.get(a);
            a.removeEventListener('mouseover', listeners.mouseover);
            a.removeEventListener('mouseout', listeners.mouseout);
            _this.listeners.delete(a);
        }));
    };
    /**
     * @return {?}
     */
    HeadersLightingDirective.prototype.ngOnDestroy = function () {
        this.destroyListeners();
    };
    return HeadersLightingDirective;
}());
HeadersLightingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[headersLighting]'
            },] },
];
/** @nocollapse */
HeadersLightingDirective.ctorParameters = function () { return [
    { type: ElementRef }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeadersLightingModule = /** @class */ (function () {
    function HeadersLightingModule() {
    }
    return HeadersLightingModule;
}());
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
//# sourceMappingURL=headers-lighting.es5.js.map
