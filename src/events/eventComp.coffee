define('EventComponent',[
  'react'
  './eventDispatcher'
  'moment'
],
(
  React
  dispatcher
  moment
)->
  EventComponent = React.createClass
    getInitialState: ->
      dispatcher.register (payload)=>
        switch payload.actionType
          when "show-event"
            console.log "hi"

      return @props.event

    handleInfo: ->
      "hi"

    normalizeDate: (offset)->
      moment(offset).format('MMMM Do YYYY, h:mm:ss a');

    render: ->
      console.log @state
      <div className='event' onClick={@handleInfo}>
        <div className='name'><span>{@state.get('name')}</span></div>
        <div className='description'><span>{@state.get('description')}</span></div>
        <div className='rsvp'><span>Going:&nbsp;</span><span>{@state.get('yes_rsvp_count')}</span></div>
        <div className='when'><span>When:&nbsp;</span><span>{@normalizeDate(@state.get('time'))}</span></div>
      </div>

  EventComponent
)
