angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Tasks) {
  $scope.tasks = Tasks;
})

.controller('InfosCtrl', function($scope) {
  
})

.controller('SettingsCtrl', function($rootScope, $scope, $localStorage) {

  function updateLang () {
    if ($localStorage.settings) {
      $scope.settings = $localStorage.settings;
    } else {
      $localStorage.settings = $scope.settings = {
        language: "port",
        frequency: "day"
      }
    }
    
    if ($localStorage.settings.language == "port") {
      $scope.title = "Configurações";

      $scope.languages = [
        { "name": "Português", "val": "port" },
        { "name": "Inglês", "val": "ing" }
      ];

      $scope.frequency = [
        { "name": "1 vez ao dia", "val": "day" },
        { "name": "1 vez por semana", "val": "week" }
      ];

      $scope.labelTime = "Horário";

      $localStorage.tabs = $rootScope.tabs = {
        home: "Baleia Vermelha",
        infos: "Informações",
        settings: "Configurações"
      }
    } else if ($localStorage.settings.language == "ing") {
      $scope.title = "Settings";

      $scope.languages = [
        { "name": "Portuguese","val": "port" },
        { "name": "English","val": "ing" }
      ];

      $scope.frequency = [
        { "name": "Once a day", "val": "day" },
        { "name": "Once a week", "val": "week" }
      ];

      $scope.labelTime = "Time";

      $localStorage.tabs = $rootScope.tabs = {
        home: "Red While",
        infos: "Infos",
        settings: "Settings"
      }
    }
  }
  updateLang();
  
  $scope.changeLang = function() {
    updateLang();
  }
});
