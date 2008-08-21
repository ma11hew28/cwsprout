/* Start ----------------------------------------------------- controllers/app.js*/

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
 
  showAbout: function() {
    SC.page.get('about').set('isVisible', YES);
  },
 
  hideAbout: function() {
    SC.page.get('about').set('isVisible', NO);
  },

  showTopicFeatures: function() {
		// myView.set('isVisible', true|false);
		// SC.page.get('outlet.path.to.my.view').toggleProperty('isVisible');
		this.set('areTopicFeaturesVisible', YES);
		this.hideGroupFeatures();
		this.hideNetworkFeatures();
	},

  hideTopicFeatures: function() {
		this.set('areTopicFeaturesVisible', NO);
	},

  showGroupFeatures: function() {
		this.set('areGroupFeaturesVisible', YES);
	},

  hideGroupFeatures: function() {
		this.set('areGroupFeaturesVisible', NO);
	},
	
	isClockShowingObserver: function() {
	var areGroupFeaturesVisible = this.get('areGroupFeaturesVisible');
	var newGreeting = (isClockShowing) ? 'CLOCK!' : 'Hello World!' ;
	this.set('greeting', newGreeting) ;
	}.observes('areGroupFeaturesVisible')

  showNetworkFeatures: function() {
		this.set('areNetworkFeaturesVisible', YES);
	},

  hideNetworkFeatures: function() {
		this.set('areNetworkFeaturesVisible', NO);
	},

}) ;


/* End ------------------------------------------------------- controllers/app.js*/

