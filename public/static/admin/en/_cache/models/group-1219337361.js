/* Start ----------------------------------------------------- models/group.js*/

// ==========================================================================
// Admin.Group
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.Group = SC.Record.extend(
/** @scope Admin.Group.prototype */ {

  dataSource: Admin.server,
  properties: ['name', 'description'],
  features: SC.Record.hasMany('Admin.GroupFeature', 'group')

}) ;


/* End ------------------------------------------------------- models/group.js*/

