// js/models/metaroom.js

define([
	'jquery',
	'backbone',
	],
	function() {
			var MetaroomModel = Backbone.Model.extend({
					defaults: {
							id: 0
					}
			});

			return MetaroomModel;
	}
);
