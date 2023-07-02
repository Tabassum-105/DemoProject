import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  items = [{
    img: "assets/toast.png",
    itemName: "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST",
    itemDescription: "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…"
  }, 
  {
    img: "assets/pineapple.png",
    itemName: "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
    itemDescription: "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno…"
  }, 
  {
    img: "assets/cheese.png",
    itemName: "CHEESE, SPINACH & MUSHROOM STUFFED CHI…",
    itemDescription: "Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken…"
  }, 
  {
    img: "assets/couscous.png",
    itemName: "FETA AND PEACH COUSCOUS",
    itemDescription: "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta..."
  }, 
  {
    img: "assets/toast.png",
    itemName: "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST",
    itemDescription: "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…"
  }, 
  {
    img: "assets/pineapple.png",
    itemName: "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
    itemDescription: "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno…"
  }];

  scrollRight() {
    const container = document.querySelector(".scroll-container");
    if (container) {
      container.scrollLeft += container.clientWidth;
    }
  }

  scrollLeft() {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollLeft -= container.clientWidth;
    }
  }
}
