/**
 * External dependencies
 */
var page = require( 'page' );

/**
 * Internal dependencies
 */
var controller = require( 'my-sites/controller' ),
	config = require( 'config' ),
	peopleController = require( './controller' );

module.exports = function() {
	if ( config.isEnabled( 'manage/people' ) ) {
		[ 'team', 'followers', 'email-followers', 'viewers' ].forEach( function( filter ) {
			page(
			    '/people/' + filter,
				controller.siteSelection,
				controller.sites,
				makeLayout,
				clientRender
			);
			page(
			    '/people/' + filter + '/:site_id',
				peopleController.enforceSiteEnding,
				controller.siteSelection,
				controller.navigation,
				peopleController.people.bind( null, filter ),
				makeLayout,
				clientRender
			);
		} );

		page(
		    '/people/new/:site_id',
			peopleController.enforceSiteEnding,
			controller.siteSelection,
			controller.navigation,
			peopleController.invitePeople,
			makeLayout,
			clientRender
		);

		page(
		    '/people/edit/:site_id/:user_login',
			peopleController.enforceSiteEnding,
			controller.siteSelection,
			controller.navigation,
			peopleController.person,
			makeLayout,
			clientRender
		);

		// Anything else is unexpected and should be redirected to the default people management URL: /people/team
		page(
		    '/people/(.*)?',
			controller.siteSelection,
			peopleController.redirectToTeam,
			makeLayout,
			clientRender
		);
	}
};
