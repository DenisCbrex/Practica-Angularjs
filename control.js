angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoControl",function($scope, localStorageService){
  if(localStorageService.get("angular-todolist")){
  $scope.todo = localStorageService.get("angular-todolist");
}
else{
  $scope.todo = [];
}
  /*
    {
        description:"hacer angularjs"
        fecha:"03-03-14 2:00pm"
  }
  */
  $scope.$watchCollection("todo", function(){
    return $scope.newActv;
  },function(newValue, oldValue) {
localStorageService.set("angular-todolist", $scope.todo);
  });
  $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
  }
  $scope.clean = function(){
    $scope.todo = [];
  }
});
