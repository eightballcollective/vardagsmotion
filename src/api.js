const BASE_URL = process.env.API_BASE_URL || 'https://hack4sweden.herokuapp.com'
const STATUS_OK = 200

const jsonHeader = {
  'Content-Type': 'application/json'
}

function checkStatus(response) {
  if (response.status >= STATUS_OK && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}

function parseJSON(response) {
  return response.json()
}

function ftch(...args) {
  return fetch(...args)
    .then(checkStatus)
    .then(parseJSON)
}

// Returns a Promise with the data of /motions
module.exports.getMotions = function() {
  const url = `${BASE_URL}/motions`
  return ftch(
    url, {
      method: 'GET',
      headers: { ...jsonHeader }
    }
  )
}
