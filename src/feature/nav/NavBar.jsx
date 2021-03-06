import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src='./logo512.png' alt='logo' style={{marginRight: 15}}/> 
                Wedding Event
            </Menu.Item>
            <Menu name='Events' />
            <Menu.Item>
                <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event'/>
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login'/>
                <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
            </Menu.Item>

        </Container>
    </Menu>
  )
}

export default NavBar