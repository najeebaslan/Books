const { errorType } = require('./errorContant')

const getErrorCode = errorName => {
  // var kgsf=errorType.NOTFOUND[errorName]
  console.log(errorType.NOTFOUND);
  return errorType.NOTFOUND
}
// var kgkdf= getErrorCode(message)
// console.log(kgkdf);
module.exports = getErrorCode
