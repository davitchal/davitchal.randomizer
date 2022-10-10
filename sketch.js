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

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(32);
  text("Click to Randomize", 50, 50);

}

function draw() {
  if (animating == true){
    ellipse(random(width), random(height), random(50, 200));
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
