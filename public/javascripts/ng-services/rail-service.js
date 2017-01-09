// angular.module('martaApp')
// 	.service('railService', function($http, $timeout){
// 		this.getAllTrains = function(){
// 			return $http.get('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=e894d4a6-72ca-4268-94ec-af98560a3cc8');
// 		}
// 	})

angular.module('martaApp')
	.service('railService', function($http, $timeout){
		this.getAllTrains = function(){
			return $http({
				method: 'GET',
				url: 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=e894d4a6-72ca-4268-94ec-af98560a3cc8'
		});
		}
	})