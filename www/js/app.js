// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $localStorage, $state, $cordovaLocalNotification, Tasks) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.cordova && window.StatusBar && ionic.Platform.isAndroid()) {
      StatusBar.backgroundColorByHexString("#ef5350");
    }

    if(ionic.Platform.device().platform === "iOS") {
      window.plugin.notification.local.promptForPermission();
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
      $cordovaLocalNotification.add(notifiers);
    };

    if (!$localStorage.settings) {
      addNotifications();
    }
  });

  if ($localStorage.tabs) {
    $rootScope.tabs = $localStorage.tabs;
  } else {
    $localStorage.tabs = $rootScope.tabs = {
      home: "Baleia Vermelha",
      infos: "Informações",
      settings: "Configurações"
    }
  }

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

      $localStorage.tabs = $rootScope.tabs = {
        home: "Red Whale",
        infos: "Infos",
        settings: "Settings"
      }
    }
    $state.go('tab.infos');
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    cache: false,
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.infos', {
    url: '/infos',
    cache: false,
    views: {
      'tab-infos': {
        templateUrl: 'templates/tab-infos.html',
        controller: 'InfosCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    cache: false,
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
