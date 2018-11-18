// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(d, key, value) {
   return Object.assign({}, d, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const cloneDriver = Object.assign({}, driver)
  delete cloneDriver[key]
  return cloneDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
