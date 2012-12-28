

Ext.define('FunCheap.store.Deals', {
    extend: 'Ext.data.Store',
    requires: [
        'FunCheap.model.Deal'
    ],
 
    config: {
        autoSync: true,
        autoLoad: true,
        model: 'FunCheap.model.Deal',
        storeId: 'DealStore',
       /* data:[
{"id":3,"title":"Storking Comedy: Free Standup  Oakland","desc":"Comedian Lineup:Keith DSouza (Deft, quick, rapscallion, Sylvan Productions)Kyle Mizono (Visiting, Vital, Veristic, Super Serious Show)Mimi Vilmenay (Devil-may-care femme fatale, hilarious matriarch)","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2012/12/58762_3549248624764_2101677047_n-250x166-80x80.jpg","href":"http://sf.funcheap.com/storking-comedy-free-standup-oakland/","info":"Thursday, December 27  6:30 pm  Cost: FREE  Stork Club"},
{"id":0,"title":"Christmas Bird Walk at Crissy Field  Presidio","desc":"Help start off San Francisco Audubon Christmas Bird Count Day with a pair of binoculars or some sharp eyes on December 27, 2012.Please note: Registration for the 2012 Christmas Bird Count is now closed. Keep your eye on the Golden Gate Audubon website in 2013 ","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2010/12/bird-walk-80x80.jpg","href":"http://sf.funcheap.com/christmas-bird-walk-crissy-field-presidio/","info":"Thursday, December 27  8:00 am  Cost:FREE**The bird count has been $5 in the past, but 2012 is free. Donations are still accepted. Crissy Field"},
{"id":5,"title":"Win Tix: Zongo Junction: Brooklyn Afrobeat  Slims","desc":"Generating a well-deserved buzz in NYCs exploding afrobeat scene, Zongo Junction electrifies dance floors wherever they perform with five horns, and a six-piece rhythm section.Skins \u0026 Needles (members of Crown City Rockers) open the show.","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2012/12/zongo-80x80.png","href":"http://sf.funcheap.com/zongo-junction-brooklyn-afrobeat-slims/","info":"Thursday, December 27  9:00 pm  Cost:WIN**Regular cost, $15 Slim\u0027s"},
{"id":6,"title":"Win Tix: The Soft Moon: Dark, Hypnotic Lo-Fi  Rickshaw Stop","desc":"The one-man project of Luis Vasquez, The Soft Moon gives the darkly hypnotic sounds of Suicide, Joy Division, Bauhaus, and Krautrock new life with a stripped-down, lo-fi approach also inspired by his Afro-Cuban heritage and the wide-open spaces of the Mojave Desert where he was raised.Popscene ","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2012/12/Soft-moon-NP-1-80x80.jpg","href":"http://sf.funcheap.com/popscene-soft-moon-dark-hypnotic-lofi-rickshaw-stop/","info":"Thursday, December 27  10:00 pm  Cost:WIN**Regular price, $12 Rickshaw Stop"},
{"id":4,"title":"Free Comet Club Comedy  SF","desc":" Comet Club Comedy is a weekly free comedy showcase at the Comet Club in the Marina district of San Francisco, featuring local Bay Area comedians and special guests. Comet Club Comedy Every Thursday, 8:30-10pm Comet Club, 3111 Fillmore Street, San Francisco FREE","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2012/09/comet-club-80x80.png","href":"http://sf.funcheap.com/free-comet-club-comedy-sf-14/","info":"Thursday, December 27  8:30 pm  Cost: FREE  Comet Club"},
{"id":2,"title":"DIY Zine Making Workshop  Oakland","desc":"Want to make a magazine, but dont know where to start? Bring your ideas and create your own zine of zany photos, rants, or outrageous doodles of your family.Every fourth Thursday from 6-8pm, Rock Paper Scissors Collective hosts this cheap workshop (sliding scale begins at ","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2012/12/Crafting5-590x393-80x80.jpg","href":"http://sf.funcheap.com/diy-zine-making-workshop-oakland/","info":"Thursday, December 27  6:00 pm  Cost:$1**Sliding scale cost $1-$10 - RSVP requested http://rpscollective.org/eventreg/?ee\u003d291 Rock Paper Scissors Collective"},
{"id":1,"title":"Day 2 of Kwanzaa: Dance Performance \u0026 Reggae Concert  SF","desc":"Day 2  December 27, 2012: Kujichagulia (self-determination): to define ourselves, name ourselves, create for ourselves and speak for ourselves.","imgsrc":"http://cdn.funcheap.com/wp-content/uploads/2011/12/jah-summit-250x1401-80x80.jpg","href":"http://sf.funcheap.com/day-two-kwanzaa/","info":"Thursday, December 27  All Day  Cost: FREE  Hamilton Recreation Center"},
],*/
        proxy: {
       // type: 'ajax',
       // url:  'lib/deals.json',
        reader: {
            type: 'json'
        }
    }
    }
});