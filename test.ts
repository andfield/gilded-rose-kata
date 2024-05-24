import { Item, GildedRose } from "./index";

//Test items for the GildedRose class
const items = [
  new Item("the mighty sword of sidius", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of life", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

// Days to simulate sell-in days.
const days = 2;

// loop over the days and update the quality of items
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach((item) => {
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`);
  });
  gildedRose.updateQuality();
}
