import DS from 'ember-data';

export default DS.Model.extend({
	serviceGroup: DS.belongsTo("serviceGroup", { inverse: null }),
	service: DS.belongsTo("service"),
	serviceOrder: DS.attr(),
	serviceTimeout: DS.attr({
		defaultValue() { return 0; }
	}),
});
