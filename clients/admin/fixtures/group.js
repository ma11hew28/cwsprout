// ==========================================================================
// Admin.Group Fixtures
// ==========================================================================

require('core') ;

Admin.FIXTURES = Admin.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  { guid: 1,
    type: 'Group',
	    name: "All Students",
	    description: "This is a list of all students",
  },

  { guid: 2,
    type: 'Group',
	    name: "Psychology 1. Introduction to Psychology",
	    description: "Surveys the scientific study of human psychology. Introduces students to topics such as perception, consciousness, development, cognition, emotion, motivation, psychopathology, decision making, and social behavior.",
  },

  { guid: 3,
    type: 'Group',
	    name: "Dunster House",
	    description: "Dunster House, built in 1930, is one of the first two Harvard University dormitories constructed under President Abbott Lawrence Lowell's House Plan, and one of the seven Houses given to Harvard by Edward Harkness.",
  },

]);
