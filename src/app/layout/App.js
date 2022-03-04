import { Fragment, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar';
import './styles.css';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'> 
        <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} />
      </Container>
    </Fragment>
  );
}

export default App;
