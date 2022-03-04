import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

function EventForm({setFormOpen}) {
  return (
    <Segment clearing>
        <Header content='Create new event'/>
        <Form>
            <Form.Field>
                <input type='text' placeholder='Event title'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Category'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Description'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Date'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='City'/>
            </Form.Field>
            <Button type='reset' floated='right' positive content='Submit'/>
            <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel'/>
        </Form>
    </Segment>
  )
}

export default EventForm