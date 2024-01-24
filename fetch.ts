function fetch(endpoint,options) {
  const optionString = Object.keys(options)
  const json = UrlFetchApp.fetch('https://feeds.datagolf.com/'+endpoint+'?key=d3bc85650eb3306f6d6e2c0c4bd5', {'muteHttpExceptions': true}).getContentText()
  const data = JSON.parse(json);
  console.log(data)
}

function fetchPreTourney() {
  fetch('preds/pre-tournament')
}