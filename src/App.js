import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import UserBox from './UserBox.js';
import RepoBox from './RepoBox.js';
import { Container, Heading, Section, Content, Box, Media, Image } from 'react-bulma-components/full';

class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      repos: [],
      isLoaded: false,
    }
  }

  /*
    axi
  */

  async componentDidMount() {
    
    await axios.all([
      axios.get('https://api.github.com/users/ctkrecords'),
      axios.get('https://api.github.com/users/ctkrecords/repos')
      ]).then(responseArr => {
        console.log(responseArr[0].data);
        console.log(responseArr[1].data);
        this.setState({
          user: responseArr[0].data,
          repos: responseArr[1].data,
          isLoaded: true,
        }); 
      })
      .catch(error => console.log(error))    
    }
  
  render() {
    let { user=[], repos=[], isLoaded } = this.state;
    return (
      <div className="App">
        <Section>
          <Container fluid>
              <Heading size={5} renderAs="p">
                My Gits Profile
              </Heading>
              <Heading subtitle renderAs="p">
                Using  with React and Axios
              </Heading>
          </Container>
        </Section>
        <Section>
          <Container fluid>
            {isLoaded && <UserBox user={user} />}
          </Container>
        </Section>
        <Section>
          <Container fluid>
            {isLoaded && <RepoBox repos={repos} />}
          </Container>
        </Section>
      </div>
    );
  }
}


export default App;
