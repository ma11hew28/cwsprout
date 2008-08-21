// ==========================================================================
// Admin.Network Fixtures
// ==========================================================================

require('core') ;

Admin.FIXTURES = Admin.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  { guid: 1,
    type: 'Network',
	    name: "Harvard",
	    description: "Harvard University is located in Cambridge, Massachusettes, has 6500 undergraduates, and is one of the most prestigious universities in the world!",
  },

  { guid: 2,
    type: 'Network',
	    name: "University of Georgia",
	    description: "University of Georgia is located in Georgia.",
  },

  { guid: 3,
    type: 'Network',
	    name: "National Oceanic & Atmospheric Administration",
	    description: "NOAA",
  },

]);
