/* Start ----------------------------------------------------- models/network.js*/

// ==========================================================================
// Admin.Network
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.Network = SC.Record.extend(
/** @scope Admin.Network.prototype */ {

  dataSource: Admin.server,
  properties: ['name', 'description'],
  features: SC.Record.hasMany('Admin.NetworkFeature', 'network')

}) ;


/* End ------------------------------------------------------- models/network.js*/

