// js/views/chatroom.js

define([
		'jquery',
		'underscore',
		'backbone',
		'collections/chatroom'
	],
	function($, _, Backbone, ChatroomCollection) {
		var ChatroomView = Backbone.View.extend({
			el: '.curView',
			template: _.template('<p>This is the chatroom view for chatroom: <%= id %></p>'),
			initialize: function(options) {
					this.collection = new ChatroomCollection({ id: options.id });
			},
			render: function() {
					this.$el.html( this.template( { id: this.collection.id } ) );
			}
		});

		return ChatroomView;
	}
      );
