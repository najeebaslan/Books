const { errorType } = require('./errorContant')

const getErrorCode = errorName => {
    console.log(errorType[errorName].errorType);
  return errorType[errorName]
}

module.exports = getErrorCode