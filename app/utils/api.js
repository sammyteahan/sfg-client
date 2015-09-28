/**
* API Object
*/

// var api = {
//   getCrops() {
//     var url = `http://localhost:8000/rest/crops/`;
//     return fetch(url).then((response) => response.json());
//   },
//   getCrop(pk) {
//   	var url = `http://localhost:8000/rest/crops/${pk}`;
//   	return fetch(url).then((response) => response.json());
//   },
//   getSeasonCrops(name) {
//     var url = `http://localhost:8000/rest/season/${name}`;
//     return fetch(url).then((response) => response.json());
//   }
// };

var api = {
  getCrops() {
    var url = `http://45.55.55.54/rest/crops/`;
    return fetch(url).then((response) => response.json());
  },
  getCrop(pk) {
    var url = `http://45.55.55.54/rest/crops/${pk}`;
    return fetch(url).then((response) => response.json());
  },
  getSeasonCrops(name) {
    var url = `http://45.55.55.54/rest/season/${name}`;
    return fetch(url).then((response) => response.json());
  }
};


module.exports = api;