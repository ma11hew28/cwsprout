/* Start ----------------------------------------------------- controllers/group_features.js*/

// ==========================================================================
// Admin.GroupFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Admin.groupFeaturesController = SC.CollectionController.create(
/** @scope Admin.groupFeaturesController */ {

	title: 'Feature Groups',

  search: function(searchWord){
    this.content.set('conditions', {'search':  this.get(searchWord)});
  },

}) ;


/* End ------------------------------------------------------- controllers/group_features.js*/

