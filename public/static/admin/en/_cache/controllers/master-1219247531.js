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
	
	search: function(){
    this.content.set('conditions', {'search': this.get('searchWord')});
  },

}) ;


/* End ------------------------------------------------------- controllers/master.js*/

