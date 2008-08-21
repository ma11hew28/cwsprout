// ==========================================================================
// Admin.Feature
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.Feature = SC.Record.extend(
/** @scope Admin.Feature.prototype */ {

  dataSource: Admin.server,
  properties: ['startDate', 'endDate', 'priority'],

}) ;
