/* Start ----------------------------------------------------- models/group_feature.js*/

// ==========================================================================
// Admin.GroupFeature
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.GroupFeature = SC.Record.extend(
/** @scope Admin.GroupFeature.prototype */ {

  dataSource: Admin.server,
  properties: ['startDate', 'endDate', 'priority']

}) ;


/* End ------------------------------------------------------- models/group_feature.js*/

