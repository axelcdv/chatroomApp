require.config({
	paths:{
		jquery: 'libs/jquery/jquery-min', 
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		text: 'libs/require/text',
//		cordova: 'libs/cordova/cordova-2.7.0'
		cordova: 'cordova-empty'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone',
		},
		cordova: {
			exports: 'cordova'
		},
		app: {
			deps: ['jquery', 'underscore', 'backbone', 'cordova']
		}
	}
});

require(['views/app', 'router', 'vm'], function(AppView, Router, Vm) {
//	document.addEventListener('deviceready', function () {
//		App.initialize();
		var appView = Vm.create({}, 'AppView', AppView);
		appView.render();
		Router.initialize({ appView: appView });
//	}, false);
});


