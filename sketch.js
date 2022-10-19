let cars = [{
      make: "mazda",
      model: "miata"
    }, {
      make: "nissan",
      model: "350z"
    }, {
      make: "toyota",
      model: "corolla"
    }, {
      make: "honda",
      model: "civic"
    }, {
      make: "bmw",
      model: "m2"
    }, {
      make: "subaru",
      model: "impreza"
    }];

    let randomIndex;
    let animating = false;
    let car = [];
    let imageCounter = 0;
    let button;

function preload(){
      for (let i=0; i<6; i++){
        car[i] = loadImage(`assets/car_${i}.jpg`);
      }

    }
function setup() {
  createCanvas(800, 800);
  background(200);
  textSize(32);
  textAlign(CENTER);
  text("Click to Randomize", width/2,width/2);
  imageMode(CENTER);
  frameRate(10);

  button = createButton ("Click to Randomize");
  button.mousePressed(buttonPressed);
}

function draw() {
  //console.log(car[0]);
  if (animating == true){
    clear();
    image(car[imageCounter], width/2, height/2);
    if (imageCounter < car.length - 1){
      imageCounter++;
    }else{
      imageCounter=0;
    }

  }
}

function randomizer() {
  animating = false;
  if (cars[0]) {
    background(200);
    randomIndex = int(random(cars.length));
    text(`${cars[randomIndex].make} ${cars[randomIndex].model}`, width/2, height * .75);
    image(car[randomIndex], width/2, height/2);
    //cars.splice(randomIndex, 1);
    //car.splice(randomIndex, 1);
  } else {
    background(200);
    text("Nothing left!", 50, 50);
  }
}

function buttonPressed() {
  randomIndex = int(random(cars.length));
  animating = true;
  setTimeout(randomizer, 2000);
}
