/* Start ----------------------------------------------------- controllers/master.js*/

// ==========================================================================
// Admin.MasterController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Admin.masterController = SC.CollectionController.create(
/** @scope Admin.masterController */ {

	// headers: ['Feature ID', 'Start Date', 'End Date', 'Priority']

	searchWord: '',
  
	searchButtonDefault: true,
  
	search: function(){
		Admin.topicFeaturesController.search('searchWord');
		Admin.groupFeaturesController.search('searchWord');
		Admin.networkFeaturesController.search('searchWord');
  },

}) ;


/* End ------------------------------------------------------- controllers/master.js*/

