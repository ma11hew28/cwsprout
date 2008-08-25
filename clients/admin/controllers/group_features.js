// ==========================================================================
// Admin.GroupFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.groupFeaturesController = SC.CollectionController.create(
/** @scope Admin.groupFeaturesController */ {

	title: 'Group',

  search: function(searchWord){
    this.content.set('conditions', {'search': this.get(searchWord)});
  },

}) ;
