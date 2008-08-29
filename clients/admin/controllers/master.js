// ==========================================================================
// Admin.MasterController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.masterController = SC.CollectionController.create(
/** @scope Admin.masterController */ {

	// headers: ['Feature ID', 'Start Date', 'End Date', 'Priority']

	searchWord: '',
	test: 'test', // this is for testing purposes and can be deleted entirely
  
	searchButtonDefault: true,
  searchFieldEnabled: true,

	search: function(){
		Admin.topicFeaturesController.search('searchWord');
		Admin.groupFeaturesController.search('searchWord');
		Admin.networkFeaturesController.search('searchWord');
  },

}) ;
