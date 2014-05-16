interface IItemsScope extends ng.IScope {
	metrics: string[];
	hosts: string[];
	filterMetrics: string;
	filterHosts: string;
	status: string;
}

tsafControllers.controller('ItemsCtrl', ['$scope', '$http', function($scope: IItemsScope, $http: ng.IHttpService) {
	$http.get('/api/metric')
		.success(function(data: string[]) {
			$scope.metrics = data;
		})
		.error(function(error) {
			$scope.status = 'Unable to fetch metrics: ' + error;
		});
	$http.get('/api/tagv/host')
		.success(function(data: string[]) {
			$scope.hosts = data;
		})
		.error(function(error) {
			$scope.status = 'Unable to fetch hosts: ' + error;
		});
}]);