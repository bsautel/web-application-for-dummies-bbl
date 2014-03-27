function HelloController($scope) {
    $scope.userName = 'world';
    $scope.clicksCount = 0;
    $scope.onClick = function onClick() {
        $scope.clicksCount++;
    };
    
    $scope.users = [
        {firstName: 'Ludovic', lastName: 'Samper'},
        {firstName: 'Olivier', lastName: 'Thélu'},
        {firstName: 'Jonathan', lastName: 'Mesny'}
    ];
}