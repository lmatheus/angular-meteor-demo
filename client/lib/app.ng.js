angular.module('angular-meteor-boilerplate', ['angular-meteor', 'ui.router' ]);

function onReady() {
    angular.bootstrap(document, ['angular-meteor-boilerplate']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
