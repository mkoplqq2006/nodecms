/**
 * 用户登陆相关 继承于  BaseController
 * @return
 */
module.exports = Controller("Admin/BaseController", function() {
	"use strict";
	return {
		indexAction: function() {
			//render View/Admin/login_index.html file
			return this.display();
		},
		ajaxLoginAction: function() {

		},
		loseAction: function() {
			//TODO 退出
		}
	};
});