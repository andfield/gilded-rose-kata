
# Gilded Rose Kata in TypeScript
This Readme documents my approach to the Gilded Rose Kata using TypeScript. It highlights the steps taken, the challenges encountered, and the lessons learned, aiming to provide a valuable resource for others tackling this kata.

## Initial Exploration and Testing
### Test-Driven Development (TDD) Approach:

I began by creating a test function with sample data, sourced from  resources ([https://github.com/topics/gilded-rose](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/TypeScript/app/gilded-rose.ts)). This allowed me to understand what was going on with the code.

### Code Understanding and Refactoring:

I reviewed the existing code, initially finding it to be complex and ugly. To enhance readability and maintainability, I added comments to follow the logic.

## Refactoring and Modularity
### Conjure Item Integration:

After incorporating the "Conjure" item logic, I encountered that the current implementation had heaps of regressions. This led me to refactor the code.

### Separation of Concerns:

I refactored the code to promote modularity. The Item and GildedRose classes were placed in separate files. Additionally, I extracted item mutation logic into a dedicated utils file, where each item type would have its own mutation function. This improved code organization and testability.

## Unit Testing and Integration
### Missed Unit Testing Opportunity:

While I conducted local testing of individual mutation functions using dummy data, I regret not capturing these tests formally using frameworks like Jest or Mocha. Unit tests would have provided a safety net for further development.

## Integration with updateQuality (Gilded Rose Class)
### Switch-based Approach:

To integrate the item mutation functions with the updateQuality method in the GildedRose class, I modified the existing for loop. A switch statement was incorporated to differentiate item types based on their names. Based on the item name, the corresponding mutation function from the utils file was invoked. This streamlined the logic for handling various item types.

## Refactoring with Functional Programming (Optional)
If time constraints or project requirements weren't a factor, I would have explored functional programming principles for the refactoring process. This could have involved:

### Immutability: Creating a new Item object with updated properties instead of mutating the existing object.
### Pure Functions: Defining functions that only rely on their input parameters and always produce the same output for a given input.
### Higher-Order Functions: Employing functions that take other functions as arguments or return functions.
IMO functional programming could lead to improved code clarity, testability, and maintainability, potentially simplifying future modifications and reducing the risk of regressions.
