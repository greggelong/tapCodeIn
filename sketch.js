let txt = ""; // hold the letters dont overwrite the p5 text with an variable
let tapped = false;
let blinktime;
let presstime = 0;
let taps = 0;

let firstD = 0; //get first digit of tap code
let secondD = 0; // get second digit of tap code
let elapsedFrames = 0;
let clickedFrame = 0;
let mysent = "";
let letterMtrx = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];

let attention = 8; // to check the number max number of frames that have elapsed before the computer stops counting taps as a set
function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("sketch-holder");

  background(0);
  stroke(0, 255, 0);
  noFill();
  frameRate(3); // running at half a secod
}

function draw() {
  background(0);
  // show info before blink
  textSize(20);
  noStroke();
  fill(255);
  text(taps, 30, 30);
  text(firstD, 100, 30);
  text(secondD, 150, 30);
  text(mysent, 30, 100);
  // attention bar outline
  noFill()
  strokeWeight(4)
  stroke(0,255,0)
  rect(18,48,(width-width/4)+2,23);
  // attention bar fill
  noStroke()
  fill(120);
  if (taps>0){
    rect (20,50,elapsedFrames*((width-width/4)/(attention)),20);
    }
  // put stroke and fill for square
  stroke(2)
  stroke(255, 0, 0);
  fill(0);

  //show binking square for each tap
  if (tapped) {
    fill(255, 0, 0);
  } else {
    fill(0);
  }

 
  rect(width / 2 - 150, height / 2 - 150, 300, 300);

  blinktime++;

  // turn off the blink after one second
  if (blinktime > 2) {
    tapped = false;
  }
  if (taps>0){  // only count elapsed frames if taps greater than zero
  elapsedFrames = frameCount - clickedFrame;
  }
  // check taps for ellapsed time and max taps
  if ((elapsedFrames > attention|| taps >= 5) && taps != 0) {
    // if firstD is empty fill it
    if (firstD === 0) {
      firstD = taps;
      taps = 0;
      print("firstd ", firstD);
    }
    /// else if second d is empty fill it
    // and you have your code so start over
    else if (secondD == 0) {
      secondD = taps;
      print("secondD", secondD);
      taps = 0;
      // send it to find code
      translateCode();
    }
    // set taps and elapsed frames to zero
    taps = 0;
    elapsedFrames = 0;
  }
}

function keyReleased() {
  if (key === "m" && tapped == false) {
    tapped = true;
    blinktime = 0;
    taps++;
    // set press time to  the frame
    clickedFrame = frameCount;
  }
  if (key == "a") {
  } else {
  }
  return false; // prevent any default behavior
}

function mouseReleased() {
  print("hello mouse");
  if (mouseY > height / 2 && tapped == false) {
    tapped = true;
    blinktime = 0;
    taps++;
    // set press time to  the frame
    clickedFrame = frameCount;
  }
  if (mouseY < height / 2) {
  }
}

function translateCode() {
  print("your code is", firstD, secondD);

  let mychr = letterMtrx[firstD - 1][secondD - 1];
  // clear digits
  mysent += mychr;
  firstD = 0;
  secondD = 0;
}
