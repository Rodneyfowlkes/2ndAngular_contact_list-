
import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';
import 'angular-ui-router';
import {config} from './config.js';
import {server} from './server_obj.js';
import {HomeController} from './controllers/home.controller.js';
import {EditController} from './controllers/edit_contact.controller.js';
import {ContactController} from './controllers/contact.controller.js';
import {AddController} from './controllers/addContact.controller.js';
import {request} from './services/httpRequests.service.js';


    angular
        .module('app', ['ui.router'])
        .config(config)
        .constant('SERVER', server)
        .controller('HomeController', HomeController)
        .controller('EditController', EditController)
		.controller('ContactController', ContactController)
		.controller('AddController', AddController)
		.service('request', request)
		;

