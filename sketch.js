let cars = [{
      make: "mazda",
      model: "miata"
    }, {
      make: "nissan",
      model: "350Z"
    }, {
      make: "toyota",
      mdoel: "corolla"
    }, {
      make: "honda",
      mdoel: "civic"
    }, {
      make: "bmw",
      mdoel: "m2"
    }, {
      make: "subaru",
      mdoel: "impreza"
    }];

    let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(32);
}

function draw() {
}

function mousePressed() {
  if (cars[0]) {
    background(200);
    randomIndex = int(random(cars.length));
    text(cars[randomIndex].make, 50, 50);
    cars.splice(randomIndex, 1);
  } else {
    background(200);
    text("Nothing left!", 50, 50);
  }

}
