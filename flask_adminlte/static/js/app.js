/*! Flask-AdminLTE app.js
 * ======================
 * Main JS application file for Flask-AdminLTE v2. This file
 * should be included in all pages. It handles Flask-Admin
 * specific options and plugins.
 *
 * @Author  Justus Luthy
 * @Email   <justus@luthyenterprises.com>
 * @version 2.3.3
 * @license MIT <http://opensource.org/licenses/MIT>
 */
var toastr = window.toastr;

toastr.options = {
  closeButton: true,
  closeEasing: 'swing',
  closeMethod: 'slideUp',
  positionClass: 'toast-top-right',
  showMethod: 'slideDown',
  progressBar: true
};

/* turning flask flash messages into js popup notifications */
window.popupMessages.forEach(function (m, i) {
  var category = m[0] || 'info';
  var text = m[1];
  setTimeout(function () {
    toastr.info(text);
  }, (1 + i) * 1500);
});
