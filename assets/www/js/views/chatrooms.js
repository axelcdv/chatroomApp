define([
		'jquery',
		'underscore',
		'backbone',
		'collections/chatrooms',
		'views/metaroom'
	],
	function($, _, Backbone, ChatroomsCollection, MetaroomView) {
		var ChatroomsView = Backbone.View.extend({
			el: '.curView',
			template: _.template('<h3>This is the chatroom index, listing all the chatrooms</h3>'),
			initialize: function() {
					this.collection = new ChatroomsCollection();
					console.log(this);
//					this.listenTo(this.collection, 'reset', this.render);
//					this.listenTo(this.collection, 'add', this.addOne);
					this.collection.on('add', this.addOne, this);
					this.collection.on('reset', this.render, this);
			},
			render: function() {
				this.$el.html( this.template() );
				this.collection.forEach(this.addOne, this);
				return this;
			},
			addOne: function(chatroom){
					var metaroomView = new MetaroomView({ model: chatroom });
					this.$el.append(metaroomView.render().el);
			},
			destroy: function(){
					console.log('Destroying chatrooms view'); //TODO
			}
		});

		return ChatroomsView;
	}
      );
