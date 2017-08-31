/** @format */
const activityItemSchema = {
	type: 'object',
	additionalProperties: false,
	required: [
		'activityDate',
		'activityGroup',
		'activityIcon',
		'activityId',
		'activityName',
		'activityTitle',
		'activityTs',
		'actorAvatarUrl',
		'actorName',
		'actorRole',
	],
	properties: {
		activityDate: { type: 'string' },
		activityGroup: {
			type: 'string',
			// eslint-disable-next-line quote-props
			enum: [
				'attachment',
				'comment',
				'core',
				'menu',
				'plugin',
				'post',
				'rewind',
				'term',
				'theme',
				'user',
				'widget',
			],
		},
		activityIcon: { type: 'string' },
		activityId: { type: 'string' },
		activityName: {
			type: 'string',
			// eslint-disable-next-line quote-props
			enum: [
				'attachment__deleted',
				'attachment__updated',
				'attachment__uploaded',
				'comment__approved',
				'comment__content_modified',
				'comment__deleted',
				'comment__published',
				'comment__published_awaiting_approval',
				'comment__spammed',
				'comment__trashed',
				'comment__unapproved',
				'core__autoupdated',
				'core__network_updated',
				'core__reinstalled',
				'core__update_available',
				'core__updated',
				'feedback__published',
				'jetpack__site_connected',
				'jetpack__site_disconnected',
				'jetpack__user_linked',
				'jetpack__user_unlinked',
				'menu__added',
				'menu__deleted',
				'menu__updated',
				'menu__updated',
				'menu__updated',
				'plugin__activated',
				'plugin__autoupdated',
				'plugin__deactivated',
				'plugin__deleted',
				'plugin__deletion_failed',
				'plugin__edited',
				'plugin__installed',
				'plugin__installed_filesystem',
				'plugin__network_activated',
				'plugin__network_deactivated',
				'plugin__update_available',
				'plugin__updated',
				'post__deleted',
				'post__exported',
				'post__imported',
				'post__publicized',
				'post__published',
				'post__trashed',
				'post__updated',
				'rewind__complete',
				'rewind__error',
				'term__created',
				'term__deleted',
				'term__edited',
				'theme__deleted',
				'theme__edited',
				'theme__installed',
				'theme__network_disabled',
				'theme__network_enabled',
				'theme__switched',
				'theme__update_available',
				'theme__updated',
				'user__added',
				'user__deleted',
				'user__deleted-reassigned',
				'user__failed_login_attempt',
				'user__login',
				'user__logout',
				'user__registered',
				'user__removed',
				'user__updated',
				'widget__added',
				'widget__edited',
				'widget__inactive',
				'widget__inactive-cleared',
				'widget__removed',
				'widget__reordered',
			],
		},
		activityTitle: { type: 'string' },
		activityTs: { type: 'integer' },
		actorAvatarUrl: { type: 'string' },
		actorName: { type: 'string' },
		actorRemoteId: { type: 'integer' },
		actorRole: { type: 'string' },
		actorWpcomId: { type: 'integer' },
	},
};

export const logItemsSchema = {
	type: 'object',
	additionalProperties: false,
	patternProperties: {
		'^\\d+$': {
			type: 'object',
			additionalProperties: false,
			properties: {
				data: {
					type: 'object',
					additionalProperties: false,
					required: [ 'items', 'queries' ],
					properties: {
						items: {
							patternProperties: {
								'^.+$': activityItemSchema,
							},
						},
						queries: {
							type: 'object',
							additionalProperties: false,
							patternProperties: {
								// Query key pairs
								'^\\[.*\\]$': {
									type: 'object',
									additionalProperties: false,
									required: [ 'itemKeys' ],
									properties: {
										itemKeys: {
											type: 'array',
											items: {
												type: 'string',
											},
										},
										found: {
											type: 'integer',
										},
									},
								},
							},
						},
					},
				},
				options: {
					type: 'object',
					additionalProperties: false,
					required: [ 'itemKey' ],
					properties: {
						itemKey: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};
