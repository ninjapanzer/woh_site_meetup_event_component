define([
  'react'
  './events/eventStore'
  './events/eventsComp'
],
(
  React
  eventStore
  eventComp
)->
  React.render(
    <eventComp store={eventStore} />,
    document.getElementById('eventComponent')
  )
)
