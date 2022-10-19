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

function preload(){
      for (let i=0; i<6; i++){
        //var img = new Image();
        //img.src = 'assets/car_0.jpg';
        //car[i] = img;
        car[i] = loadImage('assets/screenshot.jpg');
      }

    }
function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(32);
  text("Click to Randomize", 50, 50);
  imageMode(CENTER);
}

function draw() {
  //console.log(car[0]);
  if (animating == true){
    image(car[0], 10, 10, 50, 50);
  }
}

function randomizer() {
  animating = false;
  if (cars[0]) {
    background(200);
    randomIndex = int(random(cars.length));
    text(`${cars[randomIndex].make} ${cars[randomIndex].model}`, 50, 50);
    cars.splice(randomIndex, 1);
  } else {
    background(200);
    text("Nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
