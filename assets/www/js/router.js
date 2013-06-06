// js/router.js

define([
		'jquery',
		'underscore',
		'backbone',
		'vm',
		'events'
	],
	function($, _, Backbone, Vm, Events) {
		
		var AppRouter = Backbone.Router.extend({
			routes: {
				'index': 'index',
				'chatroom/:room_id': 'chatroom',
				'*other': 'index'
			}
		});

		var initialize = function (options) {
			var appView = options.appView;
			var router = new AppRouter(options);
			router.on('route:index', function () {
				require(['views/chatrooms'], function(ChatroomsView) {
					var chatroomsView = Vm.create(appView, 'ChatroomsView', ChatroomsView);
					chatroomsView.render();
				});
			});
			router.on('route:chatroom', function(id) {
				require(['views/chatroom'], function(ChatroomView) {
					var chatroomView = Vm.create(appView, 'ChatroomView', ChatroomView, { id: id });
					chatroomView.render();
				});
			});

			Events.on('navigate', function(path){
					console.log("Navigating to: " + path);
					router.navigate(path, { trigger: true });
			});

			Backbone.history.start();
		};


		return {
			initialize: initialize
		};
	}
);

