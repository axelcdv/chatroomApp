// js/views/app.js

define([
		'jquery',
		'underscore',
		'backbone',
		'cordova',
		'router'
		],
	function ($, _, Backbone, cordova, Router) {
		var AppView = Backbone.View.extend({
			el: $('#chatroomapp'),
			template: _.template('<h2>Chatroom app here</h2>'
				+'<div class="curView"></div>'),
			render: function() {
				this.$el.html( this.template() );
			}
		});

		return AppView;
	});


