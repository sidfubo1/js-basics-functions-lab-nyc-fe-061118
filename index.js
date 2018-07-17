// Code your solution in this file!
let a=42;
let b=264;
let p1=0.02;
let flat_p2=25;

//Returns the number of blocks from Scuber's headquarters to the pickup location (42nd Street)
function distanceFromHqInBlocks(x) {
  return Math.abs(x-a);
}

//Returns the number of feet from Scuber's headquarters to the pickup location.
function distanceFromHqInFeet(y) {
  return b*distanceFromHqInBlocks(y);
}

//Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(x,y){
  return b*(Math.abs(y-x));
}

//Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice(x,y){
  //if(400>distanceTravelledInFeet(x,y)){
    //return "Ride is free"
  //}
  if(400<distanceTravelledInFeet(x,y)<2000){
    return p1*(distanceTravelledInFeet(x,y)-400);
  }
  else if(distanceTravelledInFeet(x,y)>2000){
    return flat_p2;
  }
  else if(distanceTravelledInFeet(x,y)>2500){
    return "Cannot travel that far"
  }
}