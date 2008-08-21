// ==========================================================================
// Admin.GroupFeature Fixtures
// ==========================================================================

require('core') ;

Admin.FIXTURES = Admin.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  { guid: 1,
    type: 'GroupFeature',
  		group: 1,
			startDate: Date(),
			endDate: Date(),
		  priority: 1,
  },

  { guid: 2,
    type: 'GroupFeature',
			group: 1,
			startDate: Date(),
			endDate: Date(),
		  priority: 2,
  },

  { guid: 3,
    type: 'GroupFeature',
			group: 1,
			startDate: Date(),
			endDate: Date(),
		  priority: 3,
  },

  { guid: 4,
    type: 'GroupFeature',
			group: 2,
			startDate: Date(),
			endDate: Date(),
		  priority: 4,
  },

  { guid: 5,
    type: 'GroupFeature',
			group: 3,
			startDate: Date(),
			endDate: Date(),
		  priority: 5,
  },

]);
