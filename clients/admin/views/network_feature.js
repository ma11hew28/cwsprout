// ==========================================================================
// Admin.NetworkFeatureView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Admin.NetworkFeatureView = SC.View.extend(
/** @scope Admin.NetworkFeatureView.prototype */ {

	emptyElement: '<table class="sc-tabel-view"></table>', // this doesn't seem to do anything...

	// Properties
	content: [],
	contentBindingDefault: SC.Binding.MultipleNotEmpty,
	
	render: function() {
		var html = [];
		var content = this.get('content');
		
		// the newline and spaces are for well formatted html
		// TODO: simplify the following code with the commented out lines below
		
		// html.push('\n  <caption>' + tableTitle.toString() + '</caption>'
		// html.push(this._renderColGroup('properties'))
		
	  html.push('\n  <caption>Network Features</caption>');
	
		html.push('\n  <colgroup>\
		 					 \n    <col class=\"delete\">\
							 \n    <col class=\"feature_id\">\
							 \n    <col class=\"type_id\">\
							 \n    <col class=\"type_name\">\
               \n    <col class=\"start_date\">\
               \n    <col class=\"end_date\">\
               \n    <col class=\"priority\">\
							 \n    <col class=\"edit\">\
               \n  </colgroup>\
               \n  <thead>\
               \n    <tr>\
					     \n      <th scope=\"col\">Delete</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderById();\">Feature ID</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderByNetworkId();\">Network ID</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderByNetworkName();\">Network Name</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderByStartDate();\">Start Date</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderByEndDate();\">End Date</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.networkFeaturesController.orderByPriority();\">Priority</th>\
					     \n      <th scope=\"col\">Edit</th>\
               \n    </tr>\
               \n  </thead>');

		// Iterate through the collection and add rows
		var cnt = 0;
		content.each( function(record){
			var network = record.get('network');
			if (network != null) {
				if (++cnt % 2 == 0)
					html.push('\n    <tr class="even">');
				else
					html.push('\n    <tr>');
				html.push('\n      <td class="delete"><a onclick="Admin.networkFeaturesController.del()">-</a></td>\
									 \n      <td>' + record.get('guid') + '</td>\
									 \n      <td>' + network.get('guid') + '</td>\
									 \n      <td>' + network.get('name').substring(0, 30) + '</td>\
									 \n      <td>' + record.get('startDate').toString().substring(0, 15) + '</td>\
									 \n      <td>' + record.get('endDate').toString().substring(0, 15) + '</td>\
									 \n      <td>' + record.get('priority') + '</td>\
									 \n      <td><a>edit</a></td>\
									 \n    </tr>');
		  }
		});

		// Finally set the innerHTML of the view
		html = html.join('');
		this.set('innerHTML', html);
	}.observes('content'),

}) ;
