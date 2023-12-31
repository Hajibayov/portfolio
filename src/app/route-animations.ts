// import {
//   trigger,
//   transition,
//   style,
//   query,
//   group,
//   animateChild,
//   animate,
//   keyframes,
// } from '@angular/animations';

// export const fader = trigger('routeAnimations', [
//   transition('* <=> *', [
//     // Set a default  style for enter and leave
//     query(
//       ':enter, :leave',
//       [
//         style({
//           position: 'absolute',
//           right: 0,
//           width: '70%',
//           opacity: 0,
//           transform: 'scale(0) translateY(100%)',
//         }),
//       ],
//       { optional: true }
//     ),
//     // Animate the new page in
//     query(
//       ':enter',
//       [
//         animate(
//           '600ms ease',
//           style({ opacity: 1, transform: 'scale(1) translateY(0)' })
//         ),
//       ],
//       { optional: true }
//     ),
//   ]),
// ]);

// export const slider = trigger('routeAnimations', [
//   transition('* => isHome', slideTo('left')),
//   transition('* => isAbout', slideTo('right')),
//   transition('* => isContact', slideTo('right')),
//   transition('* => isContact', slideTo('right')),

//   transition('isAbout => *', slideTo('left')),
//   transition('isHome => *', slideTo('right')),
//   transition('isContact => *', slideTo('right')),
// ]);

// function slideTo(direction: any) {
//   const optional = { optional: true };
//   return [
//     query(
//       ':enter, :leave',
//       [
//         style({
//           position: 'absolute',
//           top: 0,
//           [direction]: 0,
//           width: '70%',
//         }),
//       ],
//       optional
//     ),
//     query(':enter', [style({ [direction]: '-100%' })]),
//     group([
//       query(
//         ':leave',
//         [animate('600ms ease', style({ [direction]: '100%' }))],
//         optional
//       ),
//       query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
//     ]),
//     // Normalize the page style... Might not be necessary

//     // Required only if you have child animations on the page
//     // query(':leave', animateChild()),
//     // query(':enter', animateChild()),
//   ];
// }
