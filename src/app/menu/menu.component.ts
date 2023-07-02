import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
  //   trigger('moveUpAnimation', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(0)' }),
  //       animate('1s', style({ transform: 'translateY(-20%)' }))
  //     ])
  //   ]),
  //   trigger('moveDownAnimation', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(0)' }),
  //       animate('1s', style({ transform: 'translateY(20%)' }))
  //     ])
  //   ])
  // ]

  trigger('moveUpAnimation', [
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(-20%)'
    })),
    transition('hidden => visible', animate('1000ms ease-in')),
  ]),
  trigger('moveDownAnimation', [
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(20%)'
    })),
    transition('hidden => visible', animate('1000ms ease-in')),
  ]),
]
})
export class MenuComponent implements OnInit{
  colState: string[] = ['hidden', 'hidden'];
  menu = {
    starterList: [
      {
        dishName: "QUINOA CROQUETTAS",
        dishInfo: "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
        dishCost: "£4.95"
      },
      {
        dishName: "CHIFA CHICHARRONES",
        dishInfo: "Slow cooked, crispy pork belly with sweet soy sauce",
        dishCost: "£6.95"
      },
      {
        dishName: "CALAMARES",
        dishInfo: "Crispy baby squid with pickled jalapeño miso salsa",
        dishCost: "£6.95"
      }
     ],
     mainCourseList: [
      {
        dishName: "EL CLASICO",
        dishInfo: "Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)",
        dishCost: "£8.95"
      },
      {
        dishName: "TIRADITO CALLAO",
        dishInfo: "Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies",
        dishCost: "£8.95"
      }
     ],
     sidesList: [
      {
        dishName: "SUPER POLLO",
        dishInfo: "Marinated corn fed chicken pieces with rocotto salsa",
        dishCost: "£4.95"
      },
      {
        dishName: "PATATAS FRITAS",
        dishInfo: "Sweet potato fries with aji rocotto mayonnaise (v)",
        dishCost: "£3.95"
      }
     ],
     dessertList: [
      {
        dishName: "ICECREAM",
        dishInfo: "Lorem ipsum dolor sit amet salerma petrum sea",
        dishCost: "£3.95"
      },
      {
        dishName: "TIRAMISU",
        dishInfo: "Lorem ipsum dolor sit amet salerma petrum sea",
        dishCost: "£3.95"
      },
      {
        dishName: "CHOCOLATE BROWNIE",
        dishInfo: "Lorem ipsum dolor sit amet salerma petrum sea",
        dishCost: "£6.95"
      }
     ]
  };
 
  ngOnInit() {

    this.animateRows();
  }

  animateRows() {
    setTimeout(() => {
      this.colState[0] = 'visible';
    }, 500);

    setTimeout(() => {
      this.colState[1] = 'visible';
    }, 1000);

  }
}
