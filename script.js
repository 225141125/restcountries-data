var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  var data = JSON.parse(this.response)
  data.forEach((item) =>{console.log((item['name']))})
}
