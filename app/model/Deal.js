

Ext.define('FunCheap.model.Deal', {
    extend: 'Ext.data.Model',
    config: {
      //  idProperty: 'id',
        fields: [
            {name: 'title',  type: 'string'},
            {name: 'info',  type: 'string'},
            {name: 'desc',   type: 'string'},
            {name: 'imgsrc',  type: 'string'},
            {name: 'href',  type: 'string'}
            
            
        ]
    }
});