define({

	define : {
		allow   : "*",
		require : [
			"morph"
		],
	},

	make : function () {
		return {}
	},

	define_state : function ( define ) {
		return { 
			value  : "",
			verify : { 
				ready : false,
				text  : ""
			}
		}
	},

	define_event : function ( define ) {
		return [ 
			{ 
				called       : "shumput input type",
				that_happens : [
					{
						on : define.with.body,
						is : [ "keyup" ]
					}
				],
				only_if      : function ( heard ) {
					return ( heard.event.target.hasAttribute("data-shumput") )
				}
			}
		]
	},

	define_listener : function ( define ) {
		console.log( define )
		return [ 
			{
				for       : "shumput input type",
				that_does : function ( heard ) {
					console.log( heard.event.target.value )
					// if ( document.activeElement === heard.event.target ) { 
					// 	var option_state
					// 	option_state = heard.state.option[heard.event.target.getAttribute("data-shumput")]
					// 	console.log( option_state )
					// }
					return heard
				}
			}
		]
	},

	define_body : function ( define ) {
		return {
			"class" : define.class_name.wrap,
			"child" : [
				( define.with.size === "large" ? this.define_large( define ) : this.define_small( define ) )
			].concat(
				( define.with.verify ? this.define_text( define ) : [] )
			)
		}
	},

	define_text : function ( define ) { 
		return {
			"class"   : define.class_name.text,
			"display" : "block",
			"text"    : "Some Text"
		}
	},

	define_small : function ( define ) { 
		var definition
		definition = {
			"type"         : "input",
			"data-shumput" : define.name,
			"class"        : define.class_name.small,
			"value"        : define.with.value || ""
		}
		if ( define.with.placeholder ) { 
			definition.placeholder = define.with.placeholder
		}
		return definition
	},

	define_large : function ( define ) { 
		var definition
		definition = {
			"type"         : "textarea",
			"data-shumput" : define.name,
			"class"        : define.class_name.large,
			"text"         : define.with.value || ""
		}
		if ( define.with.placeholder ) { 
			definition.placeholder = define.with.placeholder
		}
		return definition
	}
})