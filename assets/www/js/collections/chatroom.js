// js/collections/chatroom.js

define([
	'jquery',
	'backbone',
	'models/message'
	],
	function($, Backbone, MessageModel)
	{
			var ChatroomCollection = Backbone.Collection.extend({
					model: MessageModel,
					// URL here
					initialize: function(options) {
							this.id = options.id || 0;
							this.url = "http://home.axelcdv.com:3000/api/chatroom/" + this.id;
							this.fetch({ reset: true });
					},
					parse: function(response){
							this.room_name = response.room_name
							if(response.id && response.id !== this.id)
								console.log("Error: received different room id");
							return response.messages;
					}
			});

			return ChatroomCollection;
	}
);
