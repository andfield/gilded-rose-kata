import type { Item } from "./Item";
import {
  updateAgedBrie,
  updateBackstagePasses,
  updateConjured,
  updateMislaniousItems,
  updateSulfuras,
} from "./utils/update-quality-utils";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case "Aged Brie":
          this.items[i] = updateAgedBrie(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.items[i] = updateBackstagePasses(this.items[i]);
          break;
        case "Sulfuras, Hand of Ragnaros":
          this.items[i] = updateSulfuras(this.items[i]);
          break;
        default:
          this.items[i] = this.items[i].name.startsWith("Conjured")
            ? updateConjured(this.items[i])
            : updateMislaniousItems(this.items[i]);
      }
    }
    return this.items;
  }
}
