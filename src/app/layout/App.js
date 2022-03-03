import { Fragment } from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar';
import './styles.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Container className='main'> 
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
