type dataGolfEndpoints = '' | 'preds/pre-tournament'

function fetch(endpoint:dataGolfEndpoints,options:{}) {
  const optionString = ''+Object.keys(options).map((item:string) => item+'='+options[item])
  const json = UrlFetchApp.fetch('https://feeds.datagolf.com/'+endpoint+'?'+optionString+'key=d3bc85650eb3306f6d6e2c0c4bd5', {'muteHttpExceptions': true}).getContentText()
  const data = JSON.parse(json);
  console.log(data)
}

function fetchPreTourney() {
  fetch('preds/pre-tournament')
}