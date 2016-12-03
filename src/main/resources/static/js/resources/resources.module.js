define([
	'angular',
	'resource',
	'resources/security'

], function (
	angular,
	resource,
	security
) {
	return angular.module('skyglass.resources', [])
	.factory("$security", security)
	.name;
});