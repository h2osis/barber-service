import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save: function() {
			this.get("master").save().then(() => {
				this.transitionToRoute('service');
			});
		}
	}
});