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

//