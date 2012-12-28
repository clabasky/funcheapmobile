Ext.define('FunCheap.view.Main', {
    extend: 'Ext.Panel',
     requires: [
       'Ext.Toolbar',
       'Ext.form.Panel',
        'Ext.Button',
	'Ext.Panel',
	 'Ext.dataview.List',
	  'Ext.form.FieldSet',
	   'Ext.tab.Panel',
	    'Ext.field.TextArea',
               'Ext.field.Number',
	        'Ext.MessageBox',
               'Ext.picker.Picker',
               'Ext.TitleBar',
	        'Ext.tab.Panel',
		'Ext.field.TextArea',
		'Ext.plugin.PullRefresh',
		
    ],
    config: {
      id: 'mainView',
      layout: {
	type: 'vbox'
      },
       items: [
	{
	    xtype: 'toolbar',
	    docked: 'top',
	    title: 'FunCheap'
	},
	{
	    xtype: 'toolbar',
	    docked: 'top',
	    ui: 'light',
	    items: [
		{
		    xtype: 'button',
		    text: '<',
		    id: 'dayBackBtn'
		},
		{
		    xtype: 'spacer'
		},
		{
		    xtype: 'button',
		    text: '>',
		    id: 'dayForwardBtn'
		}
	    ]
	},
	{
	    xtype: 'panel',
	    height: '1000px',
	    html: 'fucka you',
	    layout: {
	       type: 'fit'
	       },
	    items: [
		{  
		    xtype: 'list',
		    scrollable: true,
		    id: 'dealList',
		    store: 'DealStore',
		    singleSelect: true,
		    selectedCls: 'x-view-nocolor',
		    itemTpl: new Ext.XTemplate(
			'<img src={imgsrc}>',
			'{title}<br>',
			'{info}'
			)
		}
	    ]
	    
	}
       ]
    }
});