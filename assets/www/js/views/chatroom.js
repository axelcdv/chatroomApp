// js/views/chatroom.js

define([
		'jquery',
		'underscore',
		'backbone',
		'models/chatroom'
	],
	function($, _, Backbone, Chatroom) {
		var ChatroomView = Backbone.View.extend({
			el: '.curView',
			model: Chatroom,
			template: _.template('<p>This is the chatroom view for chatroom: <%= room_id %></p>'),
			render: function() {
				this.$el.html( this.template(this.model.attributes) );
			}
		});

		return ChatroomView;
	}
      );
