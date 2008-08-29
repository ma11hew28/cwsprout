// ==========================================================================
// Admin.TopicFeatureView
// ==========================================================================

require('core');
require('views/collection/collection');
require('views/label');

/** @class

	Displays a Topic Feature table view with rows and columns

  @extends SC.CollectionView
  @author Charles Jolley and Matt Di Pasquale
  @version 1.0
*/
Admin.TopicFeatureView = SC.CollectionView.extend(
/** @scope Admin.TopicFeatureView.prototype */ {

	// What is the purpose of setting emptyElement?
	emptyElement: '<table class="sc-tabel-view"><caption></caption> \
		<colgroup></colgroup><thead><tr><th></th></tr></thead> \
		<tbody><tr><td><span class="label"></span></td></tr></tbody>
	</table>',

	// Properties
	content: [],
	contentBindingDefault: SC.Binding.MultipleNotEmpty,

	render: function() {
		var html = [];
		var content = this.get('content');
		
		// the newlines and spaces are for well formatted html		
	  html.push('\n  <caption>Topic Features</caption>');
	
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
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderById();\">Feature ID</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderByTopicId();\">Topic ID</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderByTopicSubject();\">Topic Subject</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderByStartDate();\">Start Date</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderByEndDate();\">End Date</th>\
					     \n      <th scope=\"col\" onclick=\"Admin.topicFeaturesController.orderByPriority();\">Priority</th>\
					     \n      <th scope=\"col\">Edit</th>\
               \n    </tr>\
               \n  </thead>');

		// Iterate through the collection and add rows
		var cnt = 0;
		content.each( function(record){
			var topic = record.get('topic');
			if (record.get('startDate') != null && record.get('endDate') != null) {
				if (++cnt % 2 == 0)
					html.push('\n    <tr class="even">');
				else
					html.push('\n    <tr>');
				html.push('\n      <td class="delete"><a onclick="Admin.topicFeaturesController.del()">-</a></td>\
									 \n      <td>' + record.get('guid') + '</td>\
									 \n      <td>' + topic.get('guid') + '</td>\
									 \n      <td>' + topic.get('subject').substring(0, 30) + '</td>\
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

  /** @private */
  labelView: SC.LabelView.extend({
    
	  isEditable: YES,

  }).outletFor('td?')

}) ;
