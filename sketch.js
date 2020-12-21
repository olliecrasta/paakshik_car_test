
var speed = 0;
var weight =0;
var deformation =0;
var flag = "Working"
var name = window.prompt("Please provide your name","Paakshik");
var kk = window.alert("Press Y key to start the car");
//var jj = window.prompt("Press up key to stop the test");
function preload(){
image1 = loadImage("image1.png")//blue
image2 = loadImage("image2.png")//red
image3 = loadImage("image3.png")//green
image4 = loadImage("image4.png")//yellow
sound1 = loadSound('song1.mp3')
sound2 = loadSound('song2.mp3')
}
function setup() {
  createCanvas(800,400);
  car = createSprite(0,200,50,50);
  car.addImage("green",image3)
  car.addImage("blue",image1)
  car.addImage("red",image2)
  car.addImage("yellow",image4)
  car.debug = 1;
  //car.scale = 0.5;
  wall = createSprite(730,200,20,300);
  wall.debug=true;
  wall.shapeColor = "red";
}

function draw() {
  background(0);  
  if (flag === "Working"){
 
  speed = random(55,90);
  weight = random(10,1500);
  if (keyWentDown("y")){
    sound2.play()
    car.x = 0;
    //car.setCollider("rectangle",0,0,70,40)
   // car.scale = 0.5;
    veler(car,speed);
    imager(car,"green")
    
 
  }
  deformation = Math.floor((0.5*weight*speed*speed)/22500)
  
  if (touched(wall,car)){
    car.velocityX=0;
    sound1.play();
    console.log(`The deformation caused by the accident is ${deformation}`)
    if (deformation < 100){
      push();
      
      imager(car,"blue")
      alert("It will cause no injuries")
     //car.scale = 0.16;
     pop();
    }
    else if (deformation > 100 && deformation < 180 ){
      push();
      
      imager(car,"yellow")
      car.debug = 1;
      alert("It will cause minor injuries")
      //car.scale = 0.2;
      pop();
    }
    else if (deformation > 180){
      push();
     
      imager(car,"red")
      alert("It will cause major injuries")
      //car.scale = 0.15;
      //car.rotation = 0;
      pop();
    }
    // veler(car,0);
    car.velocityX=0;
//car.x = 600;
// if (deformation < 100){
  
// }
// else if (deformation > 180){

// }
// else if (deformation >100&&deformation <180){

// }
flag="RESTART"
  }
  if (keyWentDown(UP_ARROW)){
flag = "STOP";
  }
}
  if (flag === "STOP"){
    if (keyWentDown(UP_ARROW)){
feedback = window.prompt("Please provide your feedack","abc");
alert(`Thank you for the feedback ${name}.`);
    }
    window.close();
  }
  drawSprites();

}
function touched(obj1,obj2){
  //absolute value of the difference is less than sum of half widths
  console.log(obj1.width,obj2.width,obj2.x,obj2.velocityX)
if (abs(obj1.x - obj2.x )< (obj1.width/2 + obj2.width/2)){
return true;

}
return false;
}
function veler(name,speed){
name.velocityX = map(speed,55,90,10,30);
}
// function scaler(name,size){
//   name.velocityX = scale;
  
//   }
  function imager(name,image){
name.changeImage(image)

  }
