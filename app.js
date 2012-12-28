Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'FunCheap',
    requires: [
        'Ext.Anim',
          'Ext.plugin.PullRefresh',
          'Ext.field.Radio'
                /*    
               'Ext.Button',
               'Ext.Toolbar',
               'Ext.form.FieldSet',
               'Ext.field.Email',
               'Ext.field.Password',
               'Ext.tab.Panel',
               'Ext.Map',
               'Ext.field.TextArea',
               'Ext.field.Number',
               'Ext.field.Search',
               'Ext.dataview.List',
               'Ext.MessageBox',
               'Ext.picker.Picker',
               'Ext.TitleBar'
         */      
               ],
    models: [
     'Deal'
    ],

    stores: [
      'Deals'
    ],

    views: [
     'Main'
    ],

    controllers: [
      'Main'
  
    ],
//First thing happens after init functions
    launch: function() {
         //Creates the views      
        Ext.create('FunCheap.view.Main', {fullscreen: true});
        
        
                
    }
});

