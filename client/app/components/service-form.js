import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service("store"),
	select2Service: Ember.inject.service("select2-service"),
	serviceService: Ember.inject.service("service-service"),
	selectedMasters: Ember.computed.readOnly('serviceService.selectedMasters'),

	didInsertElement: function() {
		var select2Service = this.get("select2Service");
		select2Service.initSelect2();
	},

	actions: {
		save: function() {
			const serviceRecord = this.get("service");
			var serviceService = this.get("serviceService");

			serviceService.saveService(serviceRecord);
		},

		selectMaster: function(masterId) {
			var serviceService = this.get("serviceService");

			serviceService.selectMaster(masterId);
		}
	}
});