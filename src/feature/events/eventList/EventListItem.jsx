import React from 'react'
import { Item, List, Segment, Icon, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem() {
  return (
    <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src='/assets/user.png'/>
                    <Item.Content>
                        <Item.Header content='Event Title'/>
                        <Item.Description>
                            Hosted by Camila and Lino
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/> Date
                <Icon name='marker'/> Venue
            </span>
        </Segment>
        <Segment secondary>
            <List>
                <EventListAttendee />
                <EventListAttendee />
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