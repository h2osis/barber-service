import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    ticketService: Ember.inject.service("ticket-service"),
    phone: Ember.computed.readOnly("ticketService.phone"),
    client: Ember.computed.readOnly("ticketService.client"),
});
