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

  var createArrNotify = function(time) {
    var arrNotify = [];
    var alarmTime = time;
    _.each($localStorage.tasks, function(task, i) {
      if (!task.done) {
        arrNotify.push({
          id: i,
          date: alarmTime,
          message: task.name,
          title: $localStorage.tabs.home,
          sound: null,
          every: "day",
          icon: "file://whale.png",
        })

        alarmTime = new Date(new Date(alarmTime).getTime() + 60 * 60 * 24 * 1000);
      }
    })

    console.log(arrNotify)
    return arrNotify;
  }
  
  $scope.add = function() {
    var time = new Date();
    var hour = $scope.settings.time.getHours();
    var min = $scope.settings.time.getMinutes();
    time.setHours(hour);
    time.setMinutes(min);
    var notifiers = createArrNotify(time);
    // $cordovaLocalNotification.add(notifiers)
    $scope.showAlertSave();
  };

  // An alert dialog
  $scope.showAlertSave = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Eba!! Notificações salvas!',
      template: 'Faça todos os passos e transforme o mundo num lugar melhor pra se viver'
    });

    alertPopup.then(function(res) {
      console.log('save ok');
    });
  };

  $scope.showAlertCancel = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Ahhh que pena =(',
      template: 'Suas notificações foram canceladas. Esperamos que continue na saga de espalhar mais bondade pelo mundo!'
    });

    alertPopup.then(function(res) {
      console.log('cancel ok');
    });
  };

  $scope.cancelNotification = function() {
    $cordovaLocalNotification.cancelAll().then(function (result) {
      console.log(result);
      $scope.showAlertCancel();
    });
  }

  function updateLang () {
    if ($localStorage.settings) {
      $scope.settings = $localStorage.settings;
      if ($scope.settings.time) {
        $scope.settings.time = new Date($scope.settings.time);
      }
    } else {
      $localStorage.settings = $scope.settings = {
        language: "port",
        frequency: "day"
      }
    }
    
    if ($localStorage.settings.language == "port") {
      $scope.title = "Configurações";
      $scope.languageTitle = "Idiomas";
      $scope.labelTime = "Crie notificações diárias para espalhar o amor s2";
      $scope.nameButtonSave = "Salvar alertas";
      $scope.nameButtonCancel = "Cancelar alertas";

      $scope.languages = [
        { "name": "Português", "val": "port" },
        { "name": "Inglês", "val": "ing" }
      ];
      
      $localStorage.tabs = $rootScope.tabs = {
        home: "Baleia Vermelha",
        infos: "Informações",
        settings: "Configurações"
      }
    } else if ($localStorage.settings.language == "ing") {
      $scope.title = "Settings";
      $scope.languageTitle = "Language";
      $scope.labelTime = "Create daily notifications to spread love s2";
      $scope.nameButtonSave = "Save alerts";
      $scope.nameButtonCancel = "Cancel alerts";

      $scope.languages = [
        { "name": "Portuguese","val": "port" },
        { "name": "English","val": "ing" }
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
