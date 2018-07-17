// Code your solution in this file!
let a=42;
let b=264;

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