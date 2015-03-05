module.exports = function(){
  var log = require('./testHelpers').log;

  jest.dontMock('../src/events/eventsComp.coffee');
  jest.dontMock('../src/events/eventComp.coffee');

  describe('eventsComp', function() {
    var description = this.description
    it('YAY mutliple events', function() {
      log(description, this.description);
      var EventsComp = require('../src/events/eventsComp');
      var Dispatcher = require('../src/events/eventDispatcher');
      var TestUtils = React.addons.TestUtils;

      var event = {
        get: function(thing){
          return thing;
        }
      };

      var events = [event,event];

      var eventBox = TestUtils.renderIntoDocument(
        React.createElement(EventsComp, {event: event})
      );

      Dispatcher.dispatch({
        "actionType": "load-events",
        "events": events
      });

      var box = TestUtils.scryRenderedDOMComponentsWithClass(
        eventBox, 'when');

      expect(box.length).toEqual(2);
      //expect(box.getDOMNode().textContent).toEqual('When');
    });
  });
  return '';
};
