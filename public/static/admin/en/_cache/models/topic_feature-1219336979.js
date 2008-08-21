/* Start ----------------------------------------------------- models/topic_feature.js*/

// ==========================================================================
// Admin.TopicFeature
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.TopicFeature = SC.Record.extend(
/** @scope Admin.TopicFeature.prototype */ {

  dataSource: Admin.server,
  properties: ['topic', 'feature'],

	// SproutCore looks for topicType when you do
	// Admin.TopicFeature.get('topic').get('subject') and topic is undefined. This
	// directs this TopicFeature to find the topic model object associated with
	// TopicFeature.	
  topicType: 'Admin.Topic',
	featureType: 'Admin.Feature',

}) ;


/* End ------------------------------------------------------- models/topic_feature.js*/

