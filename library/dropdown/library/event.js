(function ( window, module ) {

	if ( window.define && window.define.amd ) {
		define(module)
	} else { 

		var current_scripts, this_script, module_name

		current_scripts     = document.getElementsByTagName("script")
		this_script         = current_scripts[current_scripts.length-1]
		module_name         = this_script.getAttribute("data-module-name") || "event"
		window[module_name] = module
	}
})( 
	window,
	{
		define : {
			allow   : "*",
			require : [
				"morph"
			],
		},

		define_event : function ( define ) {
			return [
				{
					called : "reset"
				},
				{ 
					called : "choice change"
				},
				{
					called       : "toggle dropdown",
					that_happens : [
						{
							on : define.body.body,
							is : [ "click" ]
						}
					],
					only_if      : function ( heard ) {
						return ( 
							heard.event.target.hasAttribute("data-dropdown") ||
							heard.event.target.parentElement.hasAttribute("data-dropdown")
						)
					}
				},
				{
					called       : "option select",
					that_happens : [
						{
							on : define.body.body,
							is : [ "click" ]
						}
					],
					only_if : function ( heard ) {
						return ( heard.event.target.getAttribute("data-dropdown-value") )
					}
				}
			]
		},
	}
)