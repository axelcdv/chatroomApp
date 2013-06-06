// js/views/message.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models/message'
	],
	function($, _, Backbone, MessageModel)
	{
			var MessageView = Backbone.View.extend({
					model: MessageModel,
					template: _.template('<span class="from"><%= from %></span></br>'
							+ '<span class="messageBody"><%= body %></span>'),
					render: function (){
							this.$el.html( this.template( this.model.attributes ) );
							return this;
					}
			});

			return MessageView;
	}
);
