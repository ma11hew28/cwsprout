/* Start ----------------------------------------------------- controllers/network_features.js*/

// ==========================================================================
// Admin.NetworkFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Admin.networkFeaturesController = SC.CollectionController.create(
/** @scope Admin.networkFeaturesController */ {

	title: 'Network Features'

  search: function(searchWord){
    this.content.set('conditions', {'search':  this.get(searchWord)});
  },

}) ;


/* End ------------------------------------------------------- controllers/network_features.js*/

