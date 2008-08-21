/* Start ----------------------------------------------------- models/topic.js*/

// ==========================================================================
// Admin.Topic
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.Topic = SC.Record.extend(
/** @scope Admin.Topic.prototype */ {

  dataSource: Admin.server,
  properties: ['subject', 'body'],
  features: SC.Record.hasMany('Admin.TopicFeature', 'topic')

}) ;


/* End ------------------------------------------------------- models/topic.js*/

