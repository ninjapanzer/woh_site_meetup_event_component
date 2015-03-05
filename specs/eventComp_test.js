module.exports = function(){
  var log = require('./testHelpers').log;

  jest.dontMock('../src/events/eventComp.coffee');

  describe('eventComp', function() {
    var description = this.description
    it('sees if the state is passed correctly to event', function() {
      log(description, this.description);
      console.log('sees if the state is passed correctly to event');
      var EventComp = require('../src/events/eventComp');
      var TestUtils = React.addons.TestUtils;

      var event = {
        get: function(thing){
          return thing;
        }
      };

      var eventBox = TestUtils.renderIntoDocument(
        React.createElement(EventComp, {event: event})
      );

      var box = TestUtils.findRenderedDOMComponentWithClass(
        eventBox, 'event');

      expect(box.getDOMNode().textContent).toContain('yes_rsvp_count');
      expect(eventBox.state.get('name')).toEqual('name');
    });
  });
  return '';
};
