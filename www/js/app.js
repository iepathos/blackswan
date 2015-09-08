// Ionic Starter App
var web = false;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('blackswan', ['ionic', 'ngCordova'])

.controller('ContactsCtrl', function($scope, $cordovaContacts) {
  
  $scope.loadContacts = function() {
    if (web) {
      $scope.contacts = [
        { displayName: 'Glen Baker',
           alerts: true,
           silence: true
        },
        { displayName: 'Robert Hawk',
           alerts: true,
           silence: true
        },
        { displayName: 'Mocha Dick',
           alerts: false,
           silence: true
        }
      ];
    } else {
      $cordovaContacts.find({multiple: true}).then(function(res) {
        $scope.contacts  = res;
      });
    }
  }

  // parseSMS.js required

  // Test Components
  parseEmojiTest();
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
