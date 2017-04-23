angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Tasks, $localStorage) {
  if ($localStorage.tasks) {
    $scope.tasks = $localStorage.tasks;
  } else {
    $scope.tasks = Tasks;
  }

  if ($localStorage.settings.language == "port") {
    $scope.title = "Baleia Vermelha";
  } else if ($localStorage.settings.language == "ing") {
    $scope.title = "Red Whale";
  }

  $scope.changeTask = function () {
    $localStorage.tasks = $scope.tasks;
  }
})

.controller('InfosCtrl', function($scope, $localStorage) {
  if ($localStorage.settings.language == "port") {
    $scope.title = "Informações";
  } else if ($localStorage.settings.language == "ing") {
    $scope.title = "Infos";
  }
})

.controller('SettingsCtrl', function($rootScope, $scope, $localStorage, $cordovaLocalNotification, $ionicPopup) {

  var createArrNotify = function() {
    var arrNotify = [];
    _.each($localStorage.tasks, function(task, i) {
      if (!taks.done) {
        arrNotify.push({
          id: i,
          date: time,
          message: task.name,
          title: $localStorage.tabs.home,
          sound: null,
          every: "minute",
          icon: "file://whale.png",
        })
      }
    })
      
    console.log(arrNotify);
    return arrNotify;
  }
  
  $scope.add = function() {
    var alarmTime = new Date();
    alarmTime.setMinutes(alarmTime.getMinutes());
    createArrNotify();
    // $cordovaLocalNotification.add(arrNotify)
    $scope.showAlert();
  };

  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Aviso salvo com sucesso',
      template: 'Faça todos os passos e transforme o mundo num lugar melhor pra se viver'
    });

    alertPopup.then(function(res) {
      console.log('alert ok');
    });
  };

  // $scope.isScheduled = function() {
  //   $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
  //     alert("Notification 1234 Scheduled: " + isScheduled);
  //   });
  // }

  $scope.cancelNotification = function() {
    $cordovaLocalNotification.cancelAll().then(function (result) {
      console.log(result);
    });
  }

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
      $scope.languageTitle = "Idiomas";
      $scope.frequencyTitle = "Frequência dos avisos";
      $scope.labelTime = "Horário";
      $scope.nameButton = "Salvar";

      $scope.languages = [
        { "name": "Português", "val": "port" },
        { "name": "Inglês", "val": "ing" }
      ];

      $scope.frequency = [
        { "name": "1 vez ao dia", "val": "day" },
        { "name": "1 vez por semana", "val": "week" }
      ];
      
      $localStorage.tabs = $rootScope.tabs = {
        home: "Baleia Vermelha",
        infos: "Informações",
        settings: "Configurações"
      }
    } else if ($localStorage.settings.language == "ing") {
      $scope.title = "Settings";
      $scope.languageTitle = "Language";
      $scope.frequencyTitle = "Alert frequency";
      $scope.labelTime = "Time";
      $scope.nameButton = "Save";

      $scope.languages = [
        { "name": "Portuguese","val": "port" },
        { "name": "English","val": "ing" }
      ];

      $scope.frequency = [
        { "name": "Once a day", "val": "day" },
        { "name": "Once a week", "val": "week" }
      ];

      $localStorage.tabs = $rootScope.tabs = {
        home: "Red Whale",
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
