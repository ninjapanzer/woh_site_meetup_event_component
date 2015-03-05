// __tests__/sum-test.js
jest.dontMock('../src/events/eventsComp.coffee');

describe('eventComp', function() {
  it('YAY mutliple events', function() {
    var EventsComp = require('../src/events/eventsComp');
    var TestUtils = React.addons.TestUtils;

    var event = {
      get: function(thing){
        return thing;
      }
    };

    var events = [event,event]

    var eventBox = TestUtils.renderIntoDocument(
      React.createElement(EventComp, {event: event})
    );

    var box = TestUtils.findRenderedDOMComponentWithTag(
      eventBox, 'span');

    expect(box.getDOMNode().textContent).toEqual('created');
    expect(eventBox.state.get('created')).toEqual('created');
  });
});
