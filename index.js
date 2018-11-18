driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign ({}, obj, {[key]: value})
}

function  destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key){
  output = Object.assign ({}, obj)
  delete output[key]
  return output
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}
