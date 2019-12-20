import { Component, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
    animateChild,

    // ...
} from '@angular/animations';

export const newAnimation =
    trigger("routeAnimation", [
        transition("page1 <=> page2", [
            query(":enter", [
                style({
                    position: "absolute",
                    top: 0,
                    transform: "translateX(100%)"
                }),
                animate("30s linear", style({ transform: "translateX(0%)" })),
                animateChild()
            ], { optional: true }),
            query(":leave", [
                style({
                    position: "absolute",
                    top: 0,
                    transform: "translateX(0%)"
                }),
                animate("30s linear", style({ transform: "translateX(-100%)" })),
                animateChild()
            ], { optional: true })
        ])
    ])

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave { optional: true }', [
                style({
                    position: "absolute",
                    top: 0,
                    transform: "translateX(100%)"
                })
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);