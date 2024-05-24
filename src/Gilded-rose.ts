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
    this.items.forEach((item) => {
      console.log(item.name);
      switch (item.name) {
        case "Aged Brie":
          return updateAgedBrie(item);
        case "Backstage passes to a TAFKAL80ETC concert":
          return updateBackstagePasses(item);
        case "Sulfuras, Hand of Ragnaros":
          return updateSulfuras(item);
        default:
          return item.name.startsWith("Conjured")
            ? updateConjured(item)
            : updateMislaniousItems(item);
      }
    });

    return this.items;
  }
}
