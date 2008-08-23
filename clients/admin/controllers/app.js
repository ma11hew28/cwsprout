// ==========================================================================
// Admin.AppController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Admin.appController = SC.Object.create(
/** @scope Admin.appController */ {

  isAboutVisible: false,
	areTopicFeaturesVisible: true,
	areGroupFeaturesVisible: true,
	areNetworkFeaturesVisible: true,
	smallPageSize: 3,
 
  showAbout: function() {
    SC.page.get('about').set('isVisible', YES);
  },
 
  hideAbout: function() {
    SC.page.get('about').set('isVisible', NO);
  },

  showTopicFeatures: function() {
		Admin.topicFeaturesController.set('pageSize', 0);
		this.set('areTopicFeaturesVisible', YES);
		this.hideGroupFeatures();
		this.hideNetworkFeatures();
	},

  hideTopicFeatures: function() {
		this.set('areTopicFeaturesVisible', NO);
	},

  showGroupFeatures: function() {
		Admin.groupFeaturesController.set('pageSize', 0);
		this.set('areGroupFeaturesVisible', YES);
		this.hideTopicFeatures();
		this.hideNetworkFeatures();
	},

  hideGroupFeatures: function() {
		this.set('areGroupFeaturesVisible', NO);
	},

  showNetworkFeatures: function() {
		Admin.networkFeaturesController.set('pageSize', 0);
		this.set('areNetworkFeaturesVisible', YES);
		this.hideTopicFeatures();
		this.hideGroupFeatures();
	},

  hideNetworkFeatures: function() {
		this.set('areNetworkFeaturesVisible', NO);
	},
	
	showAllFeatures: function() {
		Admin.topicFeaturesController.set('pageSize', this.get('smallPageSize'));
		Admin.groupFeaturesController.set('pageSize', this.get('smallPageSize'));
		Admin.networkFeaturesController.set('pageSize', this.get('smallPageSize'));
		this.set('areTopicFeaturesVisible', YES);
		this.set('areGroupFeaturesVisible', YES);
		this.set('areNetworkFeaturesVisible', YES);
	},

}) ;
