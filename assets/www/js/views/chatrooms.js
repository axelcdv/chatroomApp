define([
		'jquery',
		'underscore',
		'backbone'
	],
	function($, _, Backbone) {
		var ChatroomView = Backbone.View.extend({
			el: '.curView',
			template: _.template('<p>This is the chatroom index, listing all the chatrooms</p>'),
			render: function() {
				this.$el.html( this.template() );
			}
		});

		return ChatroomView;
	}
      );
