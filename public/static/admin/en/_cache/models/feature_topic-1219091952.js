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
  properties: ['startDate', 'endDate', 'priority']

}) ;


/* End ------------------------------------------------------- models/topic_feature.js*/

