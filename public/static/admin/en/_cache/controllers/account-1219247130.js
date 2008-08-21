/* Start ----------------------------------------------------- controllers/account.js*/

// ==========================================================================
// Admin.AccountController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Admin.accountController = SC.Object.create(
/** @scope Admin.accountController */ {

  isLoggedIn: NO,
  uid:      -1,
  username: 'Matt',
  password: '',
  confirm_pass: '',
  token:    '',  
  loginIsVisible: NO,
  loginButtonEnabled:YES,
  loginButtonTitle: 'Login',
  loginButtonIsVisible: YES,
  changeButtonEnables:YES,
  changeButtonTitle: 'Change',

  login: function(){
		// test that name and password are valid
		
		// if valid, then:
		this.set('isLoggedIn',YES);
		this.set('loginIsVisible',NO);
  },
  
  // _loginSuccess: function(res){
  //   this.set("isLoggedIn", YES);
  //   this.set('loginButtonEnabled', YES);
  //   this.set('loginButtonTitle', 'Login');
  // 
  //   this.set('uid',   res.uid);
  //   this.set('token', res.token); 
  // 
  //   Admin.server.preload(Admin.FIXTURES) ;
  //   Admin.server.listFor();
  //   //Admin.masterController.content.refresh();
  // },
  // 
  // _loginFail: function(res){
  //   this.set('loginButtonEnabled', YES);
  //   this.set('loginButtonTitle', 'Login');
  //   if(res.msg){
  //     alert(res.msg);
  //   }else if(res.responseText){
  //     alert('[ERROR] ' + res.responseText);
  //   }
  // },

  logout: function(){
    this.set("uid", -1);
    this.set("token", '');
    this.set("isLoggedIn", NO);
  
    /* destroy all local stored data */
    var records = SC.Store.records();
    SC.Store.destroyRecords(records);
  },

  confirmPassword: function(){
    if(this.get('password') != this.get('confirm_pass')){
        alert('confirm password is incorrect!');
        return false;
    }
    return true;
  },
  // 
  // secretkey: function(){
  //   var username = this.get("username");
  //   var password = this.get("password");
  //   return MD5_hexhash(username+'/'+password+'/'+'Spam sucks');
  // }.property('username', 'password'),
  // 
  // authParam: function(){
  //   return {username: this.get('username'),
  //           uid:      this.get('uid'),
  //           token:    this.get('token')
  //          };
  // }.property('username','uid','token'),
  // 
  showAccountDialog: function(){
    SC.page.get('account').set('isVisible', YES);
  },

  hideAccountDialog: function(){
    SC.page.get('account').set('isVisible', NO);
  },

  changeAccount: function(){
    if(!this.confirmPassword()) return;

		// save changes to database, then:
    this.hideAccountDialog();
  },
  // 
  // _changeAccountSuccess: function(res){
  //   this.hideAccountDialog();
  //   this.set('changeAccountButtonEnabled', YES);
  //   this.set('changeAccountButtonTitle', 'Change');
  // },
  // 
  // _changeAccountError: function(res){
  //   this.set('changeAccountButtonEnabled', YES);
  //   this.set('changeAccountButtonTitle', 'Change');
  //    switch(res.msg){
  //      case 'password length is zero':
  //        alert('There is no password. Please type your password.');
  //        break;
  // 
  //      case 'name length is zero':
  //        alert('There is no username.');
  //        break;
  // 
  //      case 'user not found':
  //        alert('There is no user such as '+username);
  //        break;
  // 
  //      default: 
  //        alert('[ERROR] ' + res.msg);
  //    }
  // },

  cancelChange: function(){
    this.hideAccountDialog();
  },

  // loginObserver: function(){
  //   var isLoggedIn = this.get("isLoggedIn");
  //   this.set('loginIsVisible', !isLoggedIn);
  //   if(isLoggedIn){
  //     SC.page.get('header').get('searchWord').rootElement.select();
  //   }else{
  //     this.invokeLater(function(){SC.page.get('loginDialog').get('username').rootElement.select();}, 1000);
  //   }
  // }.observes("isLoggedIn")

}) ;


/* End ------------------------------------------------------- controllers/account.js*/

