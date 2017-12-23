import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service("store"),
	serviceService: Ember.inject.service("service-service"),
	servicesToGroup: Ember.computed.readOnly('serviceService.servicesToGroup'),
	isRowAddingDisabled: Ember.computed.readOnly('serviceService.isRowAddingDisabled'),

	didInsertElement: function() {
		var serviceGroup = this.get("serviceGroup"),
			serviceService = this.get("serviceService");

		serviceService.showSubservices(serviceGroup, this);
	},

	actions: {
		addServiceToGroup: function() {
			var serviceService = this.get("serviceService");

			serviceService.addServiceToGroup();
		},

		removeServiceToGroup: function(subserviceId) {
			var serviceService = this.get("serviceService");
			var serviceGroup = this.get("serviceGroup");

			serviceService.removeServiceToGroup(subserviceId, serviceGroup);
		},

		reorderSubservices: function(groupModel) {
			var serviceService = this.get("serviceService");

			serviceService.reorderSubservices(groupModel);
		},

		inputServiceToGroupTimeout: function() {
			var serviceService = this.get("serviceService");
			var serviceGroup = this.get("serviceGroup");

			serviceService.inputServiceToGroupTimeout(serviceGroup);
		},

		selectSubservice: function(serviceToGroup, subservice) {
			var serviceService = this.get("serviceService"),
				serviceGroup = this.get("serviceGroup");

			serviceService.selectSubservice(subservice, serviceToGroup, serviceGroup);
		}
	}
});
