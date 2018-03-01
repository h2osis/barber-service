import Ember from 'ember';
import Service from '@ember/service';

export default Service.extend({
    store: Ember.inject.service("store"),
    servicesToGroup: [],
    serviceToGroupTimeout: 0,
	isRowAddingDisabled: false,

    addServiceToGroup: function () {
		let servicesToGroup = this.get("servicesToGroup");
		const serviceToGroupRecord = this.get("store").createRecord("serviceToGroup");

		servicesToGroup.pushObject(serviceToGroupRecord);
		this._changeIsRowAddingDisabled();
	},

	showSubservices: function (serviceGroupRecord, _this) {
		let servicesToGroup = serviceGroupRecord
			.get("servicesToGroup")
			.toArray();

		if (servicesToGroup.get("length") > 0) {
			servicesToGroup = servicesToGroup.sortBy("serviceOrder");
			this.set("servicesToGroup", servicesToGroup);
		} else {
			_this.send("addServiceToGroup");
		}
	},

	selectSubservice: function (subservice, serviceToGroup, serviceGroup) {
		let servicesToGroup = this.get("servicesToGroup");

		if (typeof subservice === "undefined") {
			return;
		}

		serviceToGroup.set("service", subservice);
		servicesToGroup.pushObject(servicesToGroup);
		this._calculateServiceGroupCostAndTime(serviceGroup);
		this._changeIsRowAddingDisabled();
    },

    _calculateServiceGroupCostAndTime: function (serviceGroup) {
		const subservices = this.get("servicesToGroup");
		
		let serviceGroupCost = 0,
			serviceGroupTime = 0;

		subservices.forEach(function (subservice) {
			serviceGroupCost += subservice.get("cost");
			serviceGroupTime += subservice.get("time");
		});

		serviceGroup.set("cost", Number(serviceGroupCost));
		serviceGroup.set("time", Number(serviceGroupTime));
	},

	_changeIsRowAddingDisabled: function () {
		// if subservices not chosen
		// if servicesToGroup list is empty

		let isRowAddingDisabled = this.get("isRowAddingDisabled"),
			servicesToGroup = this.get("servicesToGroup");

		if (servicesToGroup.length > 0) {
			isRowAddingDisabled = false;
		} else {
			isRowAddingDisabled = true;
		}

		this.set("isRowAddingDisabled", isRowAddingDisabled);
	},
    
    removeServiceToGroup: function (record, serviceGroup) {
		let servicesToGroup = this.get("servicesToGroup");

		servicesToGroup.removeObject(record);
		record.destroyRecord("serviceToGroup");

		this._calculateServiceGroupCostAndTime(serviceGroup);
		this._changeIsRowAddingDisabled();
    },
    
    reorderSubservices: function (subservicesOrderedArr) {
		this.set("servicesToGroup", subservicesOrderedArr);
	},

	inputServiceToGroupTimeout: function (serviceGroup) {
		let serviceGroupTime = serviceGroup.get("time"),
			// previous saved summary of timeouts:
			serviceToGroupTimeout = this.get("serviceToGroupTimeout"),
			// current summary of timeouts
			serviceTimeout = 0,
			$timeouts = Ember.$("[name=serviceTimeout]");

		$timeouts.each(function (ind, elem) {
			serviceTimeout += Number(elem.value);
		});

		// subtract previous timeouts
		serviceGroupTime -= serviceToGroupTimeout;
		// add current timeouts
		serviceGroupTime += serviceTimeout;
		// save current timeouts
		serviceToGroupTimeout = serviceTimeout;
		serviceGroup.set("time", serviceGroupTime);
		this.set("serviceToGroupTimeout", serviceToGroupTimeout);
	},
});
