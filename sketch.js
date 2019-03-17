//background transitions, the cube



"use strict";

//let solarSystem;

var faceImg;
var exercisesImg;
var projectsImg;
var titleImg
var r;
var b;

function preload() {

    //solarSystem = new SolarSystem();

}

var canvas;
var pos = 24;

var x = [],
    y = [],
    segNum = 20,
    segLength = 18;

for (var i = 0; i < segNum; i++) {
    x[i] = 0;
    y[i] = 0;
}


function setup() {
    imageMode(CENTER);
    canvas = createCanvas(windowWidth, windowHeight * 5);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');

    background("#050606");
    //canvas.position(50, 80);
    frameRate(30);

    strokeWeight(9);
    stroke(255, 100);

    //    titleImg = loadImage("media/title.png");
    //    faceImg = loadImage("media/facePinkBG.png");
    //    exercisesImg = loadImage("media/exercises.png");
    //    projectsImg = loadImage("media/projects.png");

}

function draw() {
    if (keyIsPressed) {
        //        line(pmouseX, pmouseY + pos, mouseX, mouseY + pos);
        
        //segment related code based off of https://p5js.org/examples/interaction-follow-3.html
        dragSegment(0, mouseX, mouseY);
        for (var i = 0; i < x.length - 1; i++) {
            dragSegment(i + 1, x[i], y[i]);
        }
    }

}

//segment related code based off of https://p5js.org/examples/interaction-follow-3.html
function mouseWheel(event) {
    pos += event.delta;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function dragSegment(i, xin, yin) {
    var dx = xin - x[i];
    var dy = yin - y[i];
    var angle = atan2(dy, dx);
    x[i] = xin - cos(angle) * segLength;
    y[i] = yin - sin(angle) * segLength;
    segment(x[i], y[i], angle);
}
function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
}
