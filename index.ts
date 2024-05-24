export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // Loop over the items and update the quality and sellIn days
    for (let i = 0; i < this.items.length; i++) {
      //  If current item is a Conjured item
      if (this.items[i].name.startsWith("Conjured")) {
        // if current item quality is greater than 0
        if (this.items[i].quality > 0) {
          // decrease the quality of the Conjured item so its 2*1

          console.log(
            `going to decrease quality of ${this.items[i].name} by 2 from ${
              this.items[i].quality
            } to ${this.items[i].quality - 2}`
          );
          this.items[i].quality = this.items[i].quality - 2;
        }
      }

      //   if current item is not Aged Brie and Backstage passes
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" &&
        !this.items[i].name.startsWith("Conjured")
      ) {
        // if current item quality is greater than 0 and current item is not Sulfuras
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            // decrease the quality of the normal item so its 1*1
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        // if current item quality is less than 50
        if (this.items[i].quality < 50) {
          // increase the quality of brie and backstage passes by 1
          this.items[i].quality = this.items[i].quality + 1;

          // if current item is Backstage passes
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // check if sellIn is less than 10 or less
            if (this.items[i].sellIn < 11) {
              // and if the quality is less than 50
              if (this.items[i].quality < 50) {
                // increase the quality of the Backstage passes so its times 2*1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // check if sellIn is 5 or less
            if (this.items[i].sellIn < 6) {
              // and if the quality is less than 50
              if (this.items[i].quality < 50) {
                // increase the quality of the Backstage passes so its times 3*1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // if current item is not Sulfuras
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        // decrease the sellIn of the current item
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // if sellIn is less than 0
      if (this.items[i].sellIn < 0) {
        // if current item is not Aged Brie
        if (this.items[i].name != "Aged Brie") {
          // if current item is not Backstage passes
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // if current item quality is greater than 0 and current item is not Sulfuras
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                // decrease the quality of the normal item so its 2*1
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // normal item quality is 0
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        }
        // everything else but aged brie
        else {
          // if current item quality is less than 50
          if (this.items[i].quality < 50) {
            // increase the quality of normal item so its 1*1
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
