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

	// SproutCore looks for topicType when you do
	// Admin.TopicFeature.get('topic').get('subject') and topic is undefined. This
	// directs this TopicFeature to find the topic model object associated with
	// TopicFeature.
  dataSource: Admin.server,
  properties: ['startDate', 'endDate', 'priority'],
  topicType: 'Admin.Topic',

}) ;
