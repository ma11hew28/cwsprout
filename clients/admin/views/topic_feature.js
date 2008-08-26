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
	emptyElement: '<table class="sc-tabel-view"></table>',

  /** 
    The common row height for list view items.

    If you set this property, then the TableView will be able to use this
    property to perform absolute layout of its children and to minimize the
    number of actual views it has to create.

    The value should be an integer expressed in pixels.
  */
  // rowHeight: 20,

	// What is exampleView?
	// exampleView: SC.LabelView,

	// Properties
	content: [],
	contentBindingDefault: SC.Binding.MultipleNotEmpty,

	// insertionOrientation: SC.VERTICAL_ORIENTATION,
	// 
	//   contentRangeInFrame: function(frame) {
	//     var rowHeight = this.get('rowHeight') || 0;
	//     var min = Math.max(0,Math.floor(SC.minY(frame) / rowHeight)-1);
	//     var max = Math.ceil(SC.maxY(frame) / rowHeight);
	//     var ret = { start: min, length: max - min };
	//     // console.log('contentRangeInFrame(%@) = %@'.fmt($H(frame).inspect(), $H(ret).inspect()));
	//     //if (frame.height < 100) debugger;
	//     return ret;
	//   },
	// 
	//   /** @private */
	//   layoutItemView: function(itemView, contentIndex, firstLayout) {
	//     //if (!itemView) debugger;
	//     SC.Benchmark.start('SC.TableView.layoutItemViewsFor');
	// 
	//     var rowHeight = this.get('rowHeight') || 0;
	//     var parentView = itemView.get('parentView');
	//     var f = {
	//       x: 0,
	//       y: contentIndex*rowHeight,
	//       height: rowHeight,
	//       width: (parentView || this).get('innerFrame').width 
	//     };
	// 
	//     if (firstLayout || !SC.rectsEqual(itemView.get('frame'), f)) {
	//       itemView.set('frame', f);
	//     }
	//     SC.Benchmark.end('SC.TableView.layoutItemViewsFor');
	//   },
	//   
	//   computeFrame: function() {
	//     var content = this.get('content');
	//     var rows = (content) ? content.get('length') : 0;
	//     var rowHeight = this.get('rowHeight') || 20;
	//     
	//     var parent = this.get('parentNode') ;
	//     var f = (parent) ? parent.get('innerFrame') : { width: 100, height: 100 };
	// 
	//     f.x = f.y = 0;
	//     f.height = Math.max(f.height, rows * rowHeight);
	//     // console.log('computeFrame(%@)'.fmt($H(f).inspect()));
	//     return f;
	//   },
	//   
	//   insertionPointClass: SC.View.extend({
	//     emptyElement: '<div class="list-insertion-point"><span class="anchor"></span></div>'
	//   }),
	//   
	//   showInsertionPointBefore: function(itemView) {
	//     if (!itemView) return ;
	// 
	//     if (!this._insertionPointView) {
	//       this._insertionPointView = this.insertionPointClass.create();
	//     };
	// 
	//     var insertionPoint = this._insertionPointView;
	//     f = { height: 0, x: 8, y: itemView.get('frame').y, width: itemView.owner.get('frame').width };
	//     insertionPoint.set('frame', f);
	// 
	//     if (insertionPoint.parentNode != itemView.parentNode) {
	//       itemView.parentNode.appendChild(insertionPoint);
	//     }
	//   },
	// 
	//   hideInsertionPoint: function() {
	//     var insertionPoint = this._insertionPointView;
	//     if (insertionPoint) insertionPoint.removeFromParent();
	//   },
	// 
	//   // We can do this much faster programatically using the rowHeight
	//   insertionIndexForLocation: function(loc) {  
	//     var f = this.get('innerFrame');
	//     var sf = this.get('scrollFrame');
	//     var ret = Math.floor(((loc.y - f.y - sf.y) / this.get('rowHeight')) + 0.4);
	//     return ret;
	//   },

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
									 \n      <td><a onclick=\"Admin.topicFeaturesController.del()\">-</a></td>\
									 \n      <td>' + record.get('guid') + '</td>\
									 \n      <td>' + topic.get('guid') + '</td>\
									 \n      <td>' + topic.get('subject') + '</td>\
									 \n      <td>' + record.get('startDate').toString().substring(0, 15) + '</td>\
									 \n      <td>' + record.get('endDate').toString().substring(0, 15) + '</td>\
									 \n      <td>' + record.get('priority') + '</td>\
									 \n    </tr>');
			}
		});

		// Finally set the innerHTML of the view
		html = html.join('');
		this.set('innerHTML', html);
	}.observes('content'),

}) ;
