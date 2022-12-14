/*
 * Kimberly Prieto
 * Target class
 * Target class are the flies Myla is suppose to catch (part2)
 */

class Target {
  constructor() {
    this.x = random(width);
    this.y = random(620);
    this.size = 6
    this.speed = 4;
    //variable to see if the plant has been clicked on
      this.isPressed = false
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    //display bugs when user doesn't press spacebar
    if(this.isPressed === false){ 
      fill("black")
      ellipse(this.x, this.y, this.size, this.size);
  
    } //end of if statement
  }//end of display function
} //end of class target