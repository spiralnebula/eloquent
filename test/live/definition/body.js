define({
	append_to : document.body,
	part      : [
		{
			type : "text",
			with : {
				content : [
					{
						text : "Auto Complete Input",
						type : "title",
					},
				]
			},
		},
		{
			type : "input",
			name : "auto complete input",
			with : { 
				size        : "small",
				placeholder : "Enter fruit name here",
				suggest     : {
					list : [
						"Banana",
						"Kiwi",
						"Apple",
						"Melon",
						"Water Melon",
						"Peach",
						"Appricot",
						"Pear",
						"Water Fire"
					]
				}
			},
		},
			{
			type : "text",
			with : {
				content : [
					{
						text : "Large Input With Verification",
						type : "title",
					},
				]
			},
		},
		{
			type : "input",
			name : "input test",
			with : { 
				size        : "large",
				value       : "some",
				verify      : {
					when : function ( value ) {
						return ( value.length > 5 )
					},
					with : function ( value ) {
						return { 
							is_valid : false,
							text     : "Snot good yal"
						}
					},
				},
			},
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Calendar",
						type : "title",
					},
				]
			},
		},
		{
			type : "date",
			with : { 
				input : { 
					text : "Set Date"
				}
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Tree Option",
						type : "title",
					},
				]
			},
		},
		{ 
			type : "tree",
			name : "main tree option",
			with : { 
				tree : {
					"name"  : "Test",
					"text"  : "Tree",
					"popup" : false,
					"child" : [
						{ 
							"text"  : "zero level yodelihuhuh",
							"child" : [
								{ 
									"text" : "Some name some"
								}
							]
						},
						{
							"text":"First Level Yo",
							"child":[
								{
									"text"  : "Some Name here",
									"child" : [
										{ 
											"text" : "Some name here"
										}
									]
								},
								{
									"text" : "Some Random Stuff"
								}
							]
						}
					]
				},
				button : [
					"Blow Your Mind"
				],
				submit : function () {
					console.log(" KABOOOM ")
				}
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "List",
						type : "title",
					},
				]
			},
		},
		{
			type : "list",
			name : "list test",
			with : {
				notation : "*",
				list     : [
					"some item",
					"another item",
					{
						text : "Third Item",
						list : [
							"item comes here",
							"another",
						]
					},
					"fourth item"
				],
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Radio With Conditional Input",
						type : "title",
					},
				]
			},
		},
		{
			type : "radio",
			name : "radio test one",
			with : {
				option : {
					choice : [
						"Yes",
						"No",
						"Maybe"
					]
				},
				input : {
					show_on : "Yes",
					with    : { 
						placeholder : "some some",
						value       : "some some",
						verify      : {
						    when : function ( value ) {
						        return ( value.length > 3 )
						    },
						    with : function ( value ) {
						        return {
						            is_valid : false,
						            text     : "Text check yo"
						        }
						    },
						}
					}
				}
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Regular Radio",
						type : "title",
					},
				]
			},
		},
		{
			type : "radio",
			name : "radio test two",
			with : {
				option : {
					choice : [
						"Yes",
						"No",
						"Some"
					]
				}
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Radio",
						type : "title",
					},
				]
			},
		},
		{
			type : "radio",
			name : "radio second",
			with : {
				option : {
					choice : [
						"Somee",
						"Some"
					]
				}
			}
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Small Input With Verification",
						type : "title",
					},
				]
			},
		},
		{
			type        : "input",
			name        : "input test",
			with : { 
				placeholder : "This be the place",
				value       : "Some somesome",
				verify      : {
					when : function ( value ) {
						return ( value.length > 5 )
					},
					with : function ( value ) {
						return { 
							is_valid : true,
							text     : "sall good"
						}
					},
				},
			},
		},
		{
			type : "text",
			with : {
				content : [
					{
						text : "Dropdown",
						type : "title",
					},
				]
			},
		},
		{ 
			type : "select",
			name : "dropdown test",
			with : {
				option : {
					choice : [
						"somesome",
						"Some",
						"some some",
					],
					default_value : "Some",
					mark          : { 
						open   : "+",
						closed : "-"
					}
				}
			}
		}
	]
})