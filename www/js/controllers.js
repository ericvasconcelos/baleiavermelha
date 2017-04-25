angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Tasks, $localStorage, $cordovaLocalNotification, $state, $timeout) {
  if (!$localStorage.settings) {
    if (navigator.language === "pt-BR") {
      $localStorage.settings = {
        language: "port",
        frequency: "day"
      }
    } else {
      $localStorage.settings = {
        language: "ing",
        frequency: "day"
      }
    }

    $localStorage.settings.firstLogin = true;
  }

  if ($localStorage.tasks) {
    $scope.tasks = $localStorage.tasks;
  } else {
    $scope.tasks = $localStorage.tasks = Tasks;
  }

  $scope.settings = $localStorage.settings;
  if ($scope.settings.language == "port") {
    $scope.title = "Baleia Vermelha";
  } else if ($scope.settings.language == "ing") {
    $scope.title = "Red Whale";
  }

  $scope.changeTask = function () {
    $localStorage.tasks = $scope.tasks;
  }

  var createArrNotify = function(time) {
    var arrNotify = [];
    var alarmTime = time;
    _.each(Tasks, function(task, i) {
      var taskName;
      if ($localStorage.settings.language == "port") {
        taskName = task.nome;
      } else {
        taskName = task.name;
      }
      if (!task.done) {
        arrNotify.push({
          id: i,
          at: alarmTime,
          text: taskName,
          title: $localStorage.tabs.home,
          sound: null,
          every: "day",
          icon: "file://whale.png",
        })

        alarmTime = new Date(new Date(alarmTime).getTime() + 60 * 60 * 24 * 1000);
      }
    })

    console.log(arrNotify);
    return arrNotify;
  }
  
  var addNotifications = function() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    time.setHours(hour);
    time.setMinutes(min);
    var notifiers = createArrNotify(time);
    $cordovaLocalNotification.cancelAll().then(function (result) { });
    $cordovaLocalNotification.add(notifiers);
  };

  console.log($localStorage.settings.firstLogin);
  if ($localStorage.settings.firstLogin) {
    $timeout(function() {
      addNotifications();
    }, 3000)
    $state.go('tab.infos');
    $localStorage.settings.firstLogin = false;
  }
})

.controller('InfosCtrl', function($scope, $localStorage) {
  $scope.settings = $localStorage.settings;
  if ($scope.settings.language == "port") {
    $scope.title = "Informações";
  } else if ($scope.settings.language == "ing") {
    $scope.title = "Infos";
  }
})

.controller('SettingsCtrl', function($rootScope, $scope, $localStorage, $cordovaLocalNotification, $ionicPopup) {

  var createArrNotify = function(time) {
    var arrNotify = [];
    var alarmTime = time;
    _.each($localStorage.tasks, function(task, i) {
      var taskName;
      if ($scope.settings.language == "port") {
        taskName = task.nome;
      } else {
        taskName = task.name;
      }
      if (!task.done) {
        arrNotify.push({
          id: i,
          at: alarmTime,
          text: taskName,
          title: $localStorage.tabs.home,
          sound: null,
          every: "day",
          icon: "file://whale.png",
        })

        alarmTime = new Date(new Date(alarmTime).getTime() + 60 * 60 * 24 * 1000);
      }
    })

    console.log(arrNotify);
    return arrNotify;
  }
  
  $scope.add = function() {
    if ($scope.settings.time) {
      var time = new Date();
      var hour = $scope.settings.time.getHours();
      var min = $scope.settings.time.getMinutes();
      time.setHours(hour);
      time.setMinutes(min);
      var notifiers = createArrNotify(time);
      $cordovaLocalNotification.cancelAll().then(function (result) { });
      $cordovaLocalNotification.add(notifiers);
      $scope.showAlertSave();
      $scope.timeError = false;
    } else {
      $scope.timeError = true;
    }
  };

  // An alert dialog
  $scope.showAlertSave = function() {
    if ($localStorage.settings.language == "port") {
      var alertPopup = $ionicPopup.alert({
        title: 'Eba!! Notificações salvas!',
        template: 'Faça todos os passos e transforme o mundo num lugar melhor pra se viver'
      });
    } else {
      var alertPopup = $ionicPopup.alert({
        title: 'Great!! Notifications saved!',
        template: 'Thank you to help the world a best place to live!'
      });
    }

    alertPopup.then(function(res) {
      console.log('save ok');
    });
  };

  $scope.showAlertCancel = function() {
    if ($localStorage.settings.language == "port") {
      var alertPopup = $ionicPopup.alert({
        title: 'Ahhh que pena =(',
        template: 'Suas notificações foram canceladas. Esperamos que continue na saga de espalhar mais bondade pelo mundo!'
      });
    } else {
      var alertPopup = $ionicPopup.alert({
        title: 'What a pitty =(',
        template: 'Your notifications was canceled'
      });
    }

    alertPopup.then(function(res) {
      console.log('cancel ok');
    });
  };

  $scope.cancelNotification = function() {
    $cordovaLocalNotification.cancelAll().then(function (result) {
      $scope.settings.time = $localStorage.settings.time = null;
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
      $scope.errorText = "Selecione o horário";

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
      $scope.errorText = "Select time";

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
