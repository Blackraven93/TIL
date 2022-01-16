import logMessage from "./logMessage.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      return logMessage("Max calories exceeded");
    }
    return this.currentCalories
  }
}

const calorieTracker = new CalorieTracker(2000);
console.log(calorieTracker.trackCalories(500))
console.log(calorieTracker.trackCalories(1000))
console.log(calorieTracker.trackCalories(700));
