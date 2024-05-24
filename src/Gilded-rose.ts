import type { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // Loop over the items and update the quality and sellIn days
    for (let i = 0; i < this.items.length; i++) {}

    return this.items;
  }
}
