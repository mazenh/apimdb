var apiProject=angular.module("apiProject",[]);
apiProject.controller('myCtrl',function($scope,$http){
	$scope.searchBox="";
	$scope.movies=false;
	$scope.getactors=function(){
	var promise=$http.get('https://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query='+$scope.searchBox);
	promise.then(successCallback);
	function successCallback(response){
	$scope.results=response.data.results;
    
}
};

		$scope.getMoviesById = function(id) {
	    $scope.mazen=id;
		var promise = $http.get("http://api.themoviedb.org/3/person/"+$scope.mazen+"/movie_credits?api_key=f24727bdb915ca05f7718876104b211d" );
		promise.then(successCallback);
		function successCallback(response){
	    $scope.cast=response.data.cast;
	    $scope.movies=true;
}
};
}
);

