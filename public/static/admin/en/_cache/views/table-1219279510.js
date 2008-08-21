/* Start ----------------------------------------------------- views/table.js*/

// ==========================================================================
// Admin.TableView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Admin.TableView = SC.View.extend(
/** @scope Admin.TableView.prototype */ {

	emptyElement: '<table class="sc-tabel-view"></table>',

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
		
	  html.push('\n  <caption>' + this.get('title') + '</caption>');
	
		html.push('\n  <colgroup>\
							 \n    <col id=\"feature_id\">\
               \n    <col id=\"start_date\">\
               \n    <col id=\"end_date\">\
               \n    <col id=\"priority\">\
               \n  </colgroup>\
               \n  <thead>\
               \n    <tr>\
					     \n      <th scope=\"col\">Feature ID</th>\
					     \n      <th scope=\"col\">Start Date</th>\
					     \n      <th scope=\"col\">End Date</th>\
					     \n      <th scope=\"col\">Priority</th>\
               \n    </tr>\
               \n  </thead>');	  

		// Iterate through the collection and add rows
		html.push(this._renderTBody(content));

		// Finally set the innerHTML of the view
		html = html.join('');
		this.set('innerHTML', html);
	}.observes('content'),

	_renderTBody: function(content) {
		var html = [];

		content.each( function(record){
			html.push('\n    <tr>');

			var noColumns = record.get('properties').length;
			for (i=0; i < noColumns; i++){
				html.push('\n      <td>');
				html.push(record.get(record.get('properties')[i]));
				html.push('</td>');
			};
			html.push('\n    </tr>');
		});

		return html.join('');
	}

}) ;


/* End ------------------------------------------------------- views/table.js*/

