// ==========================================================================
// Admin.NetworkFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.networkFeaturesController = SC.CollectionController.create(
/** @scope Admin.networkFeaturesController */ {

	title: 'Network',

  search: function(searchWord){
    this.content.set('conditions', {'search': this.get(searchWord)});
  },

	orderById: function() {
		if (this.get('orderBy') == 'guid ASC') {
			this.set('orderBy', 'guid DESC');
		} else
		 	this.set('orderBy', 'guid ASC');
	},

	orderByNetworkId: function() {
		if (this.get('orderBy') == 'network.guid ASC') {
			this.set('orderBy', 'network.guid DESC');
		} else
		 	this.set('orderBy', 'network.guid ASC');
	},

	orderByNetworkName: function() {
		if (this.get('orderBy') == 'network.name ASC') {
			this.set('orderBy', 'network.name DESC');
		} else
		 	this.set('orderBy', 'network.name ASC');
	},

	orderByStartDate: function() {
		if (this.get('orderBy') == 'startDate ASC') {
			this.set('orderBy', 'startDate DESC');
		} else
		 	this.set('orderBy', 'startDate ASC');
	},

	orderByEndDate: function() {
		if (this.get('orderBy') == 'endDate ASC') {
			this.set('orderBy', 'endDate DESC');
		} else
		 	this.set('orderBy', 'endDate ASC');
	},

	orderByPriority: function() {
		if (this.get('orderBy') == 'priority ASC') {
			this.set('orderBy', 'priority DESC');
		} else
		 	this.set('orderBy', 'priority ASC');
	},

}) ;
