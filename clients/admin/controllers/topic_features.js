// ==========================================================================
// Admin.TopicFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.topicFeaturesController = SC.CollectionController.create(
/** @scope Admin.topicFeaturesController */ {

	add: function(sender){
	
		var topicFeature = Admin.TopicFeature.newRecord({
			startDate: Date(),
			endDate: Date() + 21,
			priority: 1,
	    });
	
		this.set('selection', topicFeature);
	},
    
	//     var feature = Admin.TopicFeature.newRecord({
	//       title:    'untitled',
	//       text:     'click the Edit button to edit.',
	//       created:  now.format('yyyy-MM-dd HH:mm:ss'),
	//       modified: now.format('yyyy-MM-dd HH:mm:ss'),
	//       uid:      SN.accountController.get('uid'),
	//       docId:    '',
	//       isPublic: 0
	//     },SN.server);
	// 
	//     note.commitChanges();
	//     this.set('selection',[note]);
	//     SN.detailController.showEditor();
	//   },

	//   del: function(sender){
	//     if(!confirm('Are you sure?')) return;
	//     var content = this.get('content');
	//     var sel = (this.get('selection') || []).clone() ;
	//     var idx = sel.get('length') ;
	//     while(--idx >= 0) {
	//       var note = sel.objectAt(idx);
	//       note.destroy();
	//     }
	//   },
	//   
	//   search: function(searchWord){
	//     this.content.set('conditions', {'search': this.get(searchWord)});
	//   },
	// 
	//   showDialog: function(){
	//     SC.page.get('topic_feature_dialog').set('isVisible', YES);
	//   },
	// 
	//   hideDialog: function(){
	//     SC.page.get('topic_feature_dialog').set('isVisible', NO);
	//   },

	// headers: ['Feature ID', 'Start Date', 'End Date', 'Priority']
	
  // content: SC.Collection.create({ recordType: Admin.TopicFeature })

}) ;
