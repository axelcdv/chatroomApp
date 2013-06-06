// js/views/metaroom.js

define([
	'jquery',
	'underscore',
	'backbone',
	'models/metaroom',
	'events'
	],
	function($, _, Backbone, MetaroomModel, Events)
	{
			var MetaroomView = Backbone.View.extend({
					model: MetaroomModel,
					template: _.template('<h3><a href="/chatroom/<%= id %>"><%= name %></a></h3>'),

					events: {
							'push a': 'gotochat',
							'click a': 'gotochat'
					},

					render: function() {
							this.$el.html( this.template( this.model.attributes ) );
							return this;
					},
					
					gotochat: function(e) {
							e.preventDefault();
							console.log('Going to chatroom '
									+ this.model.attributes.name + " id: "
									+ this.model.attributes.id);
							Events.trigger('navigate', '/chatroom/' + this.model.attributes.id);
					}
			});

			return MetaroomView;
	}
);

