(function () {

  'use strict';

  angular.module('sampleApp').controller('sampleController', [
    '$scope', '$filter', '$mdBottomSheet', SampleController
  ]);
  function SampleController($scope, $filter, $mdBottomSheet) {
    $scope.value           = 'Hello Angular';
    $scope.pageItems       = 6;
    $scope.hello           = function () {
      alert('Hello AngularJS Material !');
    };
    $scope.selectedContent = '';

    $scope.headerClass     = {
      amount: 'table-amount-content',
      date  : 'table-date-content',
      label : 'fill-content'
    };
    $scope.contentClass    = {
      amount: 'grey',
      date  : 'bold',
      label : 'grey'
    };

    $scope.headers         = initHeaders();

    $scope.loadDatas       = function () {
      $scope.contents = initContent();
    };
    $scope.loadDatas();
    $scope.deleteOperation = function (selectedContent, $event) {
      $mdBottomSheet.show({
        controller : function ($scope) {
          $scope.deleteItem = function () {
            $mdBottomSheet.hide();
          };
        },
        targetEvent: $event,
        template   : '<md-bottom-sheet class="md-grid"><span flex></span><md-button aria-label="Delete" ng-click="deleteItem()"><i class="material-icons md-18">delete</i></md-button></md-bottom-sheet>'
      }).then(function () {
        console.log(selectedContent);
      });
    };
    $scope.selectOperation = function (checked, selectedContent) {
      console.log('Is it checked ? ' + checked);
      console.log(selectedContent);
    };
  }

  function initHeaders() {
    return [
      {
        contentField : 'date',
        contentFilter: {
          filter : 'date',
          pattern: 'dd/MM/yyyy'
        },
        contentType  : 'text',
        label        : 'Date',
        sortableField: true
      }, {
        contentField : 'label',
        contentFilter: {
          filter: 'uppercase'
        },
        contentType  : 'text',
        label        : 'Label',
        sortableField: true
      }, {
        contentField : 'amount',
        contentType  : 'input',
        label        : 'Amount',
        sortableField: true
      }
    ];
  }

  function initContent() {
    return [
      {
        amount: 10.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 1'
      }, {
        amount: 20.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 2'
      }, {
        amount: 90.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 3'
      }, {
        amount: 60.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 4'
      }, {
        amount: 70.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 5'
      }, {
        amount: 30.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 6'
      }, {
        amount: 50.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 7'
      }, {
        amount: 80.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 8'
      }, {
        amount: 5.0,
        date  : new Date().getMilliseconds(),
        label : 'Task 9'
      }
    ];
  }

})();