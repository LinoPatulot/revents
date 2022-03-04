import React from 'react'
import { Item, List, Segment, Icon, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem({event}) {
  return (
    <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                    <Item.Content>
                        <Item.Header content={event.title}/>
                        <Item.Description>
                            Hosted by {event.hostedBy}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/> {event.date}
                <Icon name='marker'/> {event.venue.address}
            </span>
        </Segment>
        <Segment secondary>
            <List>
                {
                    event.attendees.map(attendee => (
                        <EventListAttendee key={attendee.id} attendee={attendee}/>
                    ))
                }
            </List>
        </Segment>
        <Segment clearing>
            <div>Description of event</div>
            <Button color='blue' floated='right' content='View'/>
        </Segment>
    </Segment.Group>
  )
}

export default EventListItem