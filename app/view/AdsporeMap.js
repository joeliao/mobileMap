Ext.define('AdSpore.view.AdSporeMap', {

	extend: 'Ext.Container',
	requires: 'Ext.Map',

	xtype: 'location',

	config: {

		title: 'Location',
		iconCls: 'locate',

		layout: 'fit',

		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Location'
			}
		]
	},

	initialize: function() {
		var position = new google.maps.LatLng(AdSpore.app.mapCenter[0], AdSpore.app.mapCenter[1]),
			infoWindow = new google.maps.InfoWindow({ content: AdSpore.app.mapText }),
			map, marker;

		this.callParent();

		map = this.add({
			xtype: 'map',
			mapOptions: {
				center: position,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		});

		marker = new google.maps.Marker({
	        position: position,
	        map: map.getMap(),
	        visible: true
	    });

	    google.maps.event.addListener(marker, 'click', function() {
	        infoWindow.open(map, marker);
	    });
	}
});
