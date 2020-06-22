import { ElementRef, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
export declare class HeadersLightingDirective implements AfterViewChecked, AfterViewInit, OnDestroy {
    private elementRef;
    private tds;
    private listeners;
    constructor(elementRef: ElementRef);
    onMouseOver(): (event: any) => void;
    onMouseOut(): (event: any) => void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    deployListeners(): void;
    initListeners(): void;
    destroyListeners(): void;
    ngOnDestroy(): void;
}
