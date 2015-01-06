define({
	define : {
		allow   : "*",
		require : [
			"calendar_logic"
		]
	},

	define_state : function ( define ) { 
		return {
			body        : define.body.get("gregor"),
			map         : {},
			date_object : this.library.calendar_logic.get_day(),
			with        : define.with.with
		}
	},
	
	make : function ( define ) { 
		var self = this
		return [
			{ 
				called       : "gregor open year select dropdown",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) {
					return heard.event.target.hasAttribute("data-gregor-open-year-dropdown")
				}
			},
			{ 
				called       : "gregor open month select dropdown",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) {
					return heard.event.target.hasAttribute("data-gregor-open-month-dropdown")
				}
			},
			{ 
				called       : "gregor open month choice",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) { 
					return ( heard.event.target.hasAttribute("data-gregor-choose-month") )
				}
			},
			{ 
				called       : "gregor choose year",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) {
					return ( heard.event.target.hasAttribute("data-gregor-set-year") )
				}
			},
			{ 
				called       : "gregor open year choice",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) {
					return ( heard.event.target.hasAttribute("data-gregor-choose-year") )
				}
			},
			{ 
				called       : "gregor chose month",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) { 
					return ( heard.event.target.hasAttribute("data-gregor-set-month") )
				}
			},
			{ 
				called       : "gregor toggle calendar",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) { 
					return ( heard.event.target.hasAttribute("data-gregor-set-date") )
				}
			},
			{
				called       : "gregor chose date",
				that_happens : [
					{ 
						on : define.body.body,
						is : [ "click" ]
					}
				],
				only_if : function ( heard ) { 
					return ( heard.event.target.hasAttribute("data-gregor-day-number") )
				}
			}
		]
	},
})