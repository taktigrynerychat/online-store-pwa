import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const routerTransition: any = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%'})
      , {optional: true}),
    query(':enter', style({transform: 'translateX(200px)', opacity: 0})
      , {optional: true}),
    group([
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.1s cubic-bezier(0.4, 0.0, 1, 1)', style({transform: 'translateX(-300px)', opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        style({transform: 'translateX(200px)'}),
        animate('0.4s cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(0%)', opacity: 1}))
      ], {optional: true}),
    ])
  ])
]);

export const enterAnimation: any = trigger(
  'enterAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate('0.3s ease', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('0.15s ease-out', style({opacity: 0}))
    ])
  ]
);
