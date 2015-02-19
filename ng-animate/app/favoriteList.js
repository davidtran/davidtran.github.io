(function() {
  angular
    .module('app')
    .directive('favoriteList', favoriteList);

  function favoriteList() {
    return {
      restrict: 'EA',
      templateUrl: 'app/favorite-list.html',
      scope: {
        data: '='
      },
      link: link
    }

    function link(scope, element, attrs) {

      var itemsPerPage = 3;
      scope.totalPageNumber = Math.round(scope.data.length / itemsPerPage);
      scope.currentPageNumber = 1;
      scope.listItems = [];
      updateListItems();

      function updateListItems() {
        var offset = (scope.currentPageNumber - 1) * itemsPerPage;
        scope.listItems = scope.data.slice(offset, offset + itemsPerPage);
      }

      scope.next = function() {
        if (scope.currentPageNumber < scope.totalPageNumber) {
          scope.currentPageNumber++;
          scope.direction = 'left';
          updateListItems();
        }
      }

      scope.previous = function() {
        if (scope.currentPageNumber > 1) {
          scope.currentPageNumber--;
          scope.direction = 'right';
          updateListItems();
        }
      }

    }
  }
})();