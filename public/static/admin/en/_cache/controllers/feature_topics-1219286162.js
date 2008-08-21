/* Start ----------------------------------------------------- controllers/topic_features.js*/

// ==========================================================================
// Admin.TopicFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.topicFeaturesController = SC.CollectionController.create(
/** @scope Admin.topicFeaturesController */ {

	title: 'Topic Features',
	
  search: function(searchWord){
    this.content.set('conditions', {'search': this.get(searchWord)});
  },

  showDialog: function(){
    SC.page.get('topic_feature_dialog').set('isVisible', YES);
  },

  hideDialog: function(){
    SC.page.get('topic_feature_dialog').set('isVisible', NO);
  },

	// headers: ['Feature ID', 'Start Date', 'End Date', 'Priority']
	
  // content: SC.Collection.create({ recordType: Admin.TopicFeature })

}) ;


/* End ------------------------------------------------------- controllers/topic_features.js*/

