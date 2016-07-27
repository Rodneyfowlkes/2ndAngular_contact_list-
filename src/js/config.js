function config($stateProvider, $urlRouterProvider){

	$stateProvider

	 .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.temp.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.temp.html',
      controller: 'HomeController as vm'
    })
    .state('root.contact', {
      url: '/contact/:id',
      templateUrl: 'templates/contact.temp.html',
      controller: 'ContactController as vm'
    })
    .state('root.edit_contact', {
      url: '/editcontact/:id',
      templateUrl: 'templates/edit_contact.temp.html',
      controller: 'EditController as vm'
    })
    .state('root.add_contact', {
      url: '/addContact',
      templateUrl: 'templates/addContact.temp.html',
      controller: 'AddController as vm'
    })

    $urlRouterProvider.otherwise('/');

}



 config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};