define('EventsComponent',[
  'react'
  './eventDispatcher'
  './eventComp'
],
(
  React
  dispatcher
  eventComp
)->
  EventsComponent = React.createClass
    getInitialState: ->
      dispatcher.register (payload)=>
        switch payload.actionType
          when "load-events"
            @setState({ events: payload.events })
      return { events: [] }

    render: ->
      <div className='events'>
      {
        @state.events.map (event, i)=>
          <eventComp event={event}/>
      }
      </div>
  EventsComponent
)
