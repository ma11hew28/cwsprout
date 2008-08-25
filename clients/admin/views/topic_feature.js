// ==========================================================================
// Admin.TopicFeatureView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionView
  @author AuthorName
  @version 0.1
*/
Admin.TopicFeatureView = SC.CollectionView.extend(
/** @scope Admin.TopicFeatureView.prototype */ {

	emptyElement: '<table class="sc-tabel-view"></table>', // this doesn't seem to do anything...

	exampleView: SC.LabelView,

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
		
	  html.push('\n  <caption>Topic Features</caption>');
	
		html.push('\n  <colgroup>\
		 					 \n    <col id=\"delete\">\
							 \n    <col id=\"feature_id\">\
							 \n    <col id=\"type_id\">\
							 \n    <col id=\"type_name\">\
               \n    <col id=\"start_date\">\
               \n    <col id=\"end_date\">\
               \n    <col id=\"priority\">\
							 \n    <col id=\"edit\">\
               \n  </colgroup>\
               \n  <thead>\
               \n    <tr>\
					     \n      <th scope=\"col\">Delete</th>\
					     \n      <th scope=\"col\">Feature ID</th>\
					     \n      <th scope=\"col\">Topic ID</th>\
					     \n      <th scope=\"col\">Topic Subject</th>\
					     \n      <th scope=\"col\">Start Date</th>\
					     \n      <th scope=\"col\">End Date</th>\
					     \n      <th scope=\"col\">Priority</th>\
					     \n      <th scope=\"col\">Edit</th>\
               \n    </tr>\
               \n  </thead>');

		// Iterate through the collection and add rows
		content.each( function(record){
			var topic = record.get('topic');
			if (topic != null) {
				html.push('\n    <tr>\
									 \n      <td><a onclick=\"Admin.topicFeaturesController.del()\"></td>\
									 \n      <td>' + record.get('guid') + '</td>\
									 \n      <td>' + topic.get('guid') + '</td>\
									 \n      <td>' + topic.get('subject') + '</td>\
									 \n      <td>' + record.get('startDate') + '</td>\
									 \n      <td>' + record.get('endDate') + '</td>\
									 \n      <td>' + record.get('priority') + '</td>\
									 \n    </tr>');
			}
		});

		// Finally set the innerHTML of the view
		html = html.join('');
		this.set('innerHTML', html);
	}.observes('content'),

}) ;
