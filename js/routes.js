angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('selecionarHospital', {
    url: '/page2',
    templateUrl: 'templates/selecionarHospital.html',
    controller: 'selecionarHospitalCtrl'
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('avaliar', {
    url: '/page3',
    templateUrl: 'templates/avaliar.html',
    controller: 'avaliarCtrl'
  })

  .state('hEAdOPereiraNunes', {
    url: '/page4',
    templateUrl: 'templates/hEAdOPereiraNunes.html',
    controller: 'hEAdOPereiraNunesCtrl'
  })

  .state('hMDrMoacyrRDoCarmo', {
    url: '/page6',
    templateUrl: 'templates/hMDrMoacyrRDoCarmo.html',
    controller: 'hMDrMoacyrRDoCarmoCtrl'
  })

  .state('uPASurapui', {
    url: '/page7',
    templateUrl: 'templates/uPASurapui.html',
    controller: 'uPASurapuiCtrl'
  })

  .state('menu', {
    url: '/page5',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('suporte', {
    url: '/page13',
    templateUrl: 'templates/suporte.html',
    controller: 'suporteCtrl'
  })

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});