// js/collections/chatrooms.js

define([
	'jquery',
	'backbone',
	'models/metaroom'
	],
	function($, Backbone, MetaroomModel) {
			var ChatroomsCollection = Backbone.Collection.extend({
					model: MetaroomModel,
					url: 'BASEURL/api/chatrooms', // TODO
			initialize: function () {
					console.log("Fetching");
					this.fetch();
			});
			});

			return ChatroomsCollection;
	}
);

