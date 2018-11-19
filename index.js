// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  let new_array = {...driver};
  new_array[key] = value;
  return new_array;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let new_array = {...driver};
  delete new_array[key];
  return new_array;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}