/* 
 * Kimberly Prieto
 * Collector Class
 * Collector class focuses on Myla the Cat, User interaction with Myla
 */
class Collector {
    constructor() {
      //starting state
      this.state = "mylaWalk1_right" 
  
      //preload images
      this.mylaWalk1_right = loadImage("media/mylaWalk1_right.png")
      this.mylaWalk2_right = loadImage("media/mylaWalk2_right.png")
      this.mylaWalk1_left = loadImage("media/mylaWalk1_left.png")
      this.mylaWalk2_left = loadImage("media/mylaWalk2_left.png")
  
      //x and y axis of myla(the cat)
      this.x = 100
      this.y = 420
      this.size = 300
      }
  
  display() {
    //change the image shown based on current state
    let stateImage 
    switch(this.state) { 
      case "mylaWalk1_right":
          stateImage = this.mylaWalk1_right
          break
  
      case "mylaWalk2_right":
          stateImage = this.mylaWalk2_right
          break
          
      case "mylaWalk1_left":
          stateImage = this.mylaWalk1_left
          break
  
      case "mylaWalk2_left":
          stateImage = this.mylaWalk2_left
    }
      //plotting the image onto the canvas
      image(stateImage, this.x, this.y, this.size, this.size)
  
  }//end of display
    
    //user interaction with keyboard press to move the cat
    move() {
    if (keyIsDown(RIGHT_ARROW)) {
        this.state = "mylaWalk2_right"
        this.x += 4 
    } else if (keyIsDown(LEFT_ARROW)) {
        this.state = "mylaWalk2_left"
        this.x -= 4
    } else {
          //switches from mylaWalk1 to mylaWalk2 according to case
          switch (this.state){
          case "mylaWalk2_right":
                      this.state = "mylaWalk1_right"
                      break
                  case "mylaWalk2_left":
                      this.state = "mylaWalk1_left"
           } //end of switch statement 
        } //end of else statement
        
  
    } //end of move function
  } //end of class