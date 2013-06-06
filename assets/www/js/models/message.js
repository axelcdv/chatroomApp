// js/models/message.js

define([
	'jquery',
	'backbone'
	],
	function($, Backbone)
	{
			var MessageModel = Backbone.Model.extend({
					defaults: {
							from: "",
							body: ""
					}
			});

			return MessageModel;
	}
);
