// js/views/metaroom.js

define([
	'jquery',
	'underscore',
	'Backbone',
	'models/metaroom'
	],
	function($, _, Backbone, MetaroomModel)
	{
			var MetaroomView = Bacbone.View.extend({
					model: MetaroomModel,
					template: _.template('<h3><a href="/chatroom/<%= id %>"><%= name %></a></h3>'),

					events: {
							'push a': 'gotochat'
					},

					render: function() {
							this.$el.html( this.template( this.model.attributes ) );
							return this;
					},
					
					gotochat: function(e) {
							e.preventDefault();
							console.log('Going to chatroom %s (%d)',
									this.model.attributes.name,
									this.model.attributes.id);
					}
			});

			return MetaroomView;
	}
);

