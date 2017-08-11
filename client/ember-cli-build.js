/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.

  // В порядке объявления по документации метроника
  
  // Plugins CSS
  app.import("vendor/plugins/font-awesome/css/font-awesome.css");
  app.import("vendor/plugins/simple-line-icons/simple-line-icons.css");
  app.import("vendor/plugins/bootstrap/css/bootstrap.css");
  app.import("vendor/plugins/bootstrap-switch/css/bootstrap-switch.css");
  app.import("vendor/plugins/fullcalendar/fullcalendar.css");

  // Plugins Fonts
  // Font Awesome
  app.import("vendor/plugins/font-awesome/fonts/fontawesome-webfont.eot", { destDir: 'fonts' });
  app.import("vendor/plugins/font-awesome/fonts/fontawesome-webfont.svg", { destDir: 'fonts' });
  app.import("vendor/plugins/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: 'fonts' });
  app.import("vendor/plugins/font-awesome/fonts/fontawesome-webfont.woff", { destDir: 'fonts' });
  app.import("vendor/plugins/font-awesome/fonts/fontawesome-webfont.woff", { destDir: 'fonts' });
  // Glyphicons
  app.import("vendor/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.eot", { destDir: 'fonts' });
  app.import("vendor/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.svg", { destDir: 'fonts' });
  app.import("vendor/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.ttf", { destDir: 'fonts' });
  app.import("vendor/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.woff", { destDir: 'fonts' });
  app.import("vendor/plugins/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.woff2", { destDir: 'fonts' });

  // Plugins JS
  app.import("vendor/plugins/jquery-ui/jquery-ui.min.js");
  app.import("vendor/plugins/bootstrap/js/bootstrap.js");
  app.import("vendor/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js");
  app.import("vendor/plugins/jquery-slimscroll/jquery.slimscroll.js");
  app.import("vendor/plugins/jquery.blockui.min.js");
  app.import("vendor/plugins/moment.min.js");
  app.import("vendor/plugins/bootstrap-switch/js/bootstrap-switch.js");
  app.import("vendor/plugins/fullcalendar/fullcalendar.js");
  app.import("vendor/plugins/jquery-validation/js/jquery.validate.js");
  app.import("vendor/plugins/jquery-validation/js/localization/messages_ru.js");
  app.import("vendor/plugins/backstretch/jquery.backstretch.js");

  // Layout JS
  app.import("vendor/scripts/app.js");
  app.import("vendor/scripts/layout/layout.js");
  app.import("vendor/scripts/quick-sidebar.js");

  // Pages JS
  // Login 4
  app.import("vendor/pages/login/login-4.js");
  app.import("vendor/pages/login/login-4.css");

  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
