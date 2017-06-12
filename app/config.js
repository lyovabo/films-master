// (function (filmApp) {
//   filmApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
//     function($locationProvider, $stateProvider, $urlRouterProvider) {
//       $locationProvider.baseHref = "/";
//       $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: true
//       });

//       $urlRouterProvider.otherwise('/');
//       $stateProvider.state('home', {
//         url: '/',
//         templateUrl: 'app/views/main.html',
//         controller: 'MainCtrl'
//       })
//       $stateProvider.state('serial', {
//         url: '/serial/{id}/season/{sid}/episode/{eid}',
//         templateUrl: 'app/views/serial.html',
//         controller: 'SerialCtrl'
//       })

//     }
//   ]);


// })(filmApp);
