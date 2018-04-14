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
module.exports.getDecisions = function() {
  const url = `${BASE_URL}/decisions`
  return ftch(
    url, {
      method: 'GET',
      headers: { ...jsonHeader }
    }
  )
}

module.exports.getPartyVotes = function(id) {
  const url = `${BASE_URL}/partyVotes?id=${id}`
  return ftch(
    url, {
      method: 'GET',
      headers: { ...jsonHeader }
    }
  )
}

// Takes an url like http://data.riksdagen.se/dokument/H201AU11
// ann returns the summary
module.exports.parseSummary = function(url) {
  return fetch(url)
    .then(res => res.text())
    .then(text => {
      const parser = new DOMParser()
      const html = parser.parseFromString(text, 'text/html')
      const start =  html.querySelector('.Sammanfattning')
      const end =  html.querySelector('.Innehllsfrteckning')
      const nodes = []
      // Collect all nodes between Sammanfattning and Innehllsfrteckning
      let currentNode = start.nextSibling
      while(currentNode != end) {
        nodes.push(currentNode)
        currentNode = currentNode.nextSibling
      }
      // Build string
      let res = ''
      for(let i = 0; i < nodes.length; i++) {
        let content = nodes[i].textContent.trim()
        if (content != '') {
          res += nodes[i].textContent.trim() + '\n\n'
        }
      }
      return res.trim()
    })
    .catch(err => undefined)
}
