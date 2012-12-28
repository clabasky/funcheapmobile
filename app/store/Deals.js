

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
      //  data: [{"title":"San Francisco Free Guided Walking Tour Day | 8 Free Tours", "info":"Wednesday, December 26 ? All Day | Cost: FREE | All Over San Francisco", "desc":"San Francisco City Guides offer free guided walking tours of many different neighborhoods in the city and will be offering a full slate of free tours the day after Christmas on December 26, 2012.Tour starting times range from 9:30am to 2pm and there are …"}, {"title":"Kwanzaa: Free Dinner, Screening & Discussion | Oakland", "info":"Wednesday, December 26 ? 4:00 pm | Cost: FREE | Omiiroo", "desc":"Celebrate Kwanzaa with a free dinner and a screening and discussion of the film Sankofa in downtown Oakland on Saturday, December 29, 2012.There will also be a marketplace setup from 9:30 am-6 pm.In downtown Oakland, for a week, the streets at 14th and Franklin will be taken over with visual arts, healing …"}, {"title":"First Day of Kwanzaa Blues Concert | SF", "info":"Wednesday, December 26 ? 7:00 pm | Cost: FREE | Westbay Conference Center", "desc":"Day 1 – December 26, 2012: Umoja (unity): to strive for and maintain unity in the family, community, nation and race.The seven-day celebration begins with a performance by Bernard Anderson & the Old School Band."}, {"title":"“Battle of the Decades” DJ Party: $1 Drinks | SF", "info":"Wednesday, December 26 ? 8:00 pm | Cost:FREE**Free admission, bring cash for drinks| Monroe", "desc":"Please note that this event isn’t listed on the Monroe website for 12/26 so we recommend you contact the venue to confirm first before attending.Want to hear the soundtrack of your life while taking part in a unique new concept while downing  cocktails & beers staring …"}, {"title":"Twang: Honky Tonk & Country Jamboree | North Beach", "info":"Every Wednesday ? 7:00 pm | Cost: FREE | Fiddler's Green", "desc":"Twang is a nothing-fancy, fun and casual place to hang out with fellow country music fans. DJs spin traditional and contemporary country and southern music, beer & booze is sold at a fair price.Expect to get your twang on to artists like George Strait, Kenny Chesney, …"}, {"title":"Open Critical Studio: Constructive Community Criticism | SF", "info":"Every Wednesday ? 7:00 pm | Cost: FREE | CELLspace", "desc":"Every Wednesday from 7-10pm _g will open up her studio at CellSpace (2050 Bryant street) to local artist who want to meet and critically discuss each other’s work.Terrified of being told your art could be better? That’s exactly why you should come."}, {"title":"Red Hots Burlesque Show | Mission Dist.", "info":"Every Wednesday ? 7:30 pm | Cost:$5**$5-10 sliding scale| El Rio", "desc":"It’s saucy dancing with a sense of humor at the Red Hots Burlesque show on Wednesdays and Fridays at El Rio, where you can see some of the bawdiest burlesque babes in the Bay,  for a sliding scale price starting at $5Come with your sense of humor …"}, {"title":"The Business: $5 Alternative Comedy Night | Mission Dist.", "info":"Every Wednesday ? 8:00 pm | Cost:$2.50**$5 admission but $2.50 per person with 2-for-1 coupon| The Dark Room", "desc":"The Business is one of the best alternative comedy shows in SF and features comedians from Comedy Central, SXSW, and the Comedians of Comedy tour.This weekly Wednesday night comedy gig features a rotating cast of comedians, but most often features their main headliners Alex Koll, Sean …"}],
     proxy: {
        type: 'ajax',
        url:  'lib/deals.json',
        reader: {
            type: 'json'
        }
    }
    }
});