(function() {
  angular
    .module('app')
    .controller('mainController', mainController);

  function mainController($scope) {
    $scope.data = [
      'Chiang Mai',
      'Bangkok',
      'Phuket',
      'Merida',
      'Penang',
      'Kuala Lumpur',
      'Hanoi',
      'Ho Chi Minh',
      'Phnom Penh',
      'Cali',
      'Mexico City'
    ];
  }
})();