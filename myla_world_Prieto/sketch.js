/*
 * Kimberly Prieto
 * December 3rd, 2022
 * The world of Myla the cat. User can control Myla by the arrow keys 
 * Myla catche the flies but as of right now the setting is set and the user can move myla
 */

//global variables
let myla;
let bugs = []; 

function preload(){
  //calling the MylaSprite file 
  myla = new Collector()
}

function setup() {
  let canvas = createCanvas(1000, 800);
  //array for flies
  for (let i = 0; i < 100; i++) {
    bugs.push(new Target());
  }
}

function draw() {
  
  background("#ccebff");
  
  //drawing the garden
    //the concrete floor
     noStroke()
    fill("green")
    rect(0, 500, 1000, 300)
  
    //the fence 
    fill("white")
    rect(0, 250, 1000, 350)
  
    //lines of the fence
    for(var fenceLines  = 10; fenceLines <= width; fenceLines += 50) {
      noStroke()
      fill("#f2f2f2")
      rect(fenceLines, 250, 1, 350);
    }
  
    //fence post 
    for(var fencePost = 80; fencePost <= width; fencePost += 400) {
      strokeWeight(1);
      fill("white")
      stroke("lightgrey")
      rect(fencePost, 250, 30, 350);
    }
    
    //triangle of the fence
    strokeWeight(1);
    fill("white")
    triangle(80, 250, 95, 220, 110, 250);
    triangle(480, 250, 495, 220, 510, 250);
    triangle(880, 250, 895, 220, 910, 250); 
  
    //pots of the plants
    noStroke()
    fill("brown")
    for(var pots = 50; pots <= width; pots += 150) {
    fill("brown")
    arc(pots, height/2 + 190, 100, 100, TWO_PI, PI);
    }
    
    //flowers class displaying to the canvas
    flowers();
  
    //display bugs when user doesn't press spacebar
    for (let i = 0; i < bugs.length; i++) {
      if(bugs[i].isPressed === false){
      bugs[i].display()
      bugs[i].move()
    }
  }//end of for loop
  
    //myla class displaying to the canvas
    //myla.display()
    myla.display()
    myla.move()
} //end of draw function


function keyPressed() {
  if(keyCode === 32){ //if space bar is pressed
    
  //for bugs and collecting
  for(let i=0; i< bugs.length; i++) { 
      if(dist(myla.x, myla.y, bugs[i].x, bugs[i].y) < bugs[i].size + myla.size) { 
        if(bugs[i].isPressed === false){ 
          bugs[i].isPressed = true 
        }
      }
    } //end of for loop statement
  } //end of keycode statement
}//end of keyPressed function 

function flowers() {
  
      //pink flowers
      for (var x=60; x <= width; x += 150){
        let y=570;
        fill("pink");
        ellipse(x,y,20,20)
        ellipse(x-15,y+5,20,20)
        ellipse(x-25,y-5,20,20)
        ellipse(x-17,y-20,20,20)
        ellipse(x,y-15,20,20)
        fill ("#663300");
        ellipse(x-12,y-7,22,22) 
      }
  
      //sunflowers
      for(var x=40; x <= width; x += 150){
        let y=600;
        fill("yellow");
        ellipse(x,y,20,20)
        ellipse(x-15,y+5,20,20)
        ellipse(x-25,y-5,20,20)
        ellipse(x-17,y-20,20,20)
        ellipse(x,y-15,20,20)
        fill ("#663300");
        ellipse(x-12,y-7,22,22) 
      
      }
  
      //hotpink flowers
      for(var x=80; x <= width; x += 150){
        let y=590;
        fill("hotpink");
        ellipse(x,y,20,20)
        ellipse(x-15,y+5,20,20)
        ellipse(x-25,y-5,20,20)
        ellipse(x-17,y-20,20,20)
        ellipse(x,y-15,20,20)
        fill ("#663300");
        ellipse(x-12,y-7,22,22)
      
      }
}//end of flowers function