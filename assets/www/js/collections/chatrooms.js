// js/collections/chatrooms.js

define([
	'jquery',
	'backbone',
	'models/metaroom'
	],
	function($, Backbone, MetaroomModel) {
			var ChatroomsCollection = Backbone.Collection.extend({
					model: MetaroomModel,
					url: 'http://home.axelcdv.com:3000/api/chatrooms', // TODO
					initialize: function () {
						console.log("Fetching");
						this.fetch({ reset: true });
					}
			});

			return ChatroomsCollection;
	}
);

