// ==========================================================================
// Admin.GroupFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.groupFeaturesController = SC.CollectionController.create(
/** @scope Admin.groupFeaturesController */ {

	title: 'Group',

  search: function(searchWord){
    this.content.set('conditions', {'search': this.get(searchWord)});
  },

	orderById: function() {
		if (this.get('orderBy') == 'guid ASC') {
			this.set('orderBy', 'guid DESC');
		} else
		 	this.set('orderBy', 'guid ASC');
	},

	orderByGroupId: function() {
		if (this.get('orderBy') == 'group.guid ASC') {
			this.set('orderBy', 'group.guid DESC');
		} else
		 	this.set('orderBy', 'group.guid ASC');
	},

	orderByGroupName: function() {
		if (this.get('orderBy') == 'group.name ASC') {
			this.set('orderBy', 'group.name DESC');
		} else
		 	this.set('orderBy', 'group.name ASC');
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
