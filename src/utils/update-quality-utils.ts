import type { Item } from "../Item";

/*
Define update functions for different item types:
Aged Brie, Backstage passes, Sulfuras these items update their quality differently
Then there are other items that a the company might add in the future lets call them mislanious items which update their quality as +1
Then there are the new items that the company has added called Conjured items these items degrade in quality twice as fast as normal items

!!!!! Important !!!!
The quality of an item is never negative
The quality of an item is never more than 50 unless the item is Sulfuras
The quality and sellin of Sulfuras never changes
*/

const updateAgedBrie = (item: Item): Item => ({
  ...item,
  quality: Math.min(item.quality + 1, 50),
});

const updateBackstagePasses = (item: Item): Item => {
  if (item.sellIn < 0) {
    return { ...item, quality: 0 };
  }
  return {
    ...item,
    quality: Math.min(
      item.sellIn <= 5
        ? item.quality + 3
        : item.sellIn <= 10
        ? item.quality + 2
        : item.quality + 1,
      50
    ),
  };
};

const updateSulfuras = (item: Item): Item => ({ ...item });

const updateConjured = (item: Item): Item => ({
  ...item,
  quality: Math.max(item.quality - 2, 0),
});

const updateMislaniousItems = (item: Item): Item => {
  return {
    ...item,
    quality: Math.max(item.sellIn < 0 ? item.quality - 2 : item.quality - 1, 0),
  };
};

export {
  updateAgedBrie,
  updateBackstagePasses,
  updateSulfuras,
  updateConjured,
  updateMislaniousItems,
};
