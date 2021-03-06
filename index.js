function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args);
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copyFunction =  functionToBeCopied.bind(thisValue);
    return copyFunction;
}
