// Black Swan Notification Improvements by Mocha Dick
var debug = true;

angular.module('blackswan', ['ionic', 'ngCordova'])

.controller('ContactsCtrl', function($scope, $cordovaContacts) {
  var isAndroid = ionic.Platform.isAndroid();

  // Test Components
  if (debug) {
    // parseSMS.js required
    parseEmojiTest();
  }

  $scope.loadContacts = function() {
    if (isAndroid) {
      $cordovaContacts.find({multiple: true}).then(function(res) {
        $scope.contacts  = res;
      });
    } else {
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
    }
  }

})

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || false;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      if($window.localStorage[key] != undefined)
        return JSON.parse($window.localStorage[key] || false );

      return false;
    },
    remove: function(key){
      $window.localStorage.removeItem(key);
    },
    clear: function(){
      $window.localStorage.clear();
    }
  }
}])

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
