

Ext.define('FunCheap.controller.Main', {
    extend: 'Ext.app.Controller',
    dayOffset: 0,
    config: {
        refs: {
            mainView: '#mainView',
	    dayBackBtn: '#dayBackBtn',
	    dayForwardBtn: '#dayForwardBtn'
        },

        control: {
	    mainView: {
		initialize: 'loadDate'
	    },
	    dayBackBtn: {
		tap: 'dayBack'
	    },
	    dayForwardBtn: {
		tap: 'dayForward'
	    }
           
        }
    },
    
   funcheapAPI: function(){
    
	var apiSuccess = function(result){
	    console.log(result);
	    Ext.getStore('DealStore').setData(result);
	}
	
	Ext.data.JsonP.request({
	    url: "https://script.google.com/macros/s/AKfycbxl86Dlfijv6UV6gsvb-ixVEY-eBc534tSlFr1VM9xRKNdpoZg/exec?prefix=FunCheap.app.getController('Main').apiSuccess",
	    success: function(result){
		console.log(result);
		Ext.getStore('DealStore').setData(result);
	    }
	      
	});
      
   },
  
   apiSuccess: function(result){
	    console.log(result);
	    Ext.getStore('DealStore').setData(result);
	},
   
   loadDate: function(){
    
	var today = moment().format('dddd, MMM D');
	Ext.ComponentQuery.query('#mainView > toolbar')[1].setTitle(today);

    },
    
    dayBack: function(){
	
	if(this.dayOffset > 0){
	    	this.dayOffset--
	}
	
	var today = moment().add('days',this.dayOffset).format('dddd, MMM D');
	Ext.ComponentQuery.query('#mainView > toolbar')[1].setTitle(today);
    },
    
    dayForward: function(){
	
	this.dayOffset++
	
	var today = moment().add('days',this.dayOffset).format('dddd, MMM D');
	Ext.ComponentQuery.query('#mainView > toolbar')[1].setTitle(today);
    }


});
