Ext.define('AdSpore.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype:'contactform',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],
	config: {
		title: 'Contact',
		iconCls: 'user',
		url:"contact.php",
		items:[
		   {
		   	xtype:'fieldset',
		   	title: 'Contact US',
		   	instructions: 'email address is not required',
		   	items: [
					{
						xtype:'textfield',
						name:'name',
						label:'Name'
					},
					{
						xtype:'emailfield',
						name: 'email',
						label:'Email'
					},
					{
						xtype: 'textareafield',
						name: 'message',
						label:'Message'
					}
				]
		   },
		   {
		   	xtype: "button",
		   	text: "Send",
		   	ui: "confirm",
		   	handler: function() {
		   		this.up("contactform").submit();
		   	}
		   }
		
		]
	}
	
}
	
	
	
);
