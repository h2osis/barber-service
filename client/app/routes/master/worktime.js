import Ember from 'ember';
import _ from 'lodash';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RollbackAttributesMixin from 'barbers/mixins/rollback-attributes-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, RollbackAttributesMixin, {
    model(params) {
        return this.get("store").query("workTime", {
            query: {
                masterId: params.id
            }
        });
    }
});