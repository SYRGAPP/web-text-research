import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './screens/SignIn'
import SelectEmployees from './screens/SelectEmployees'
import Chat from './screens/Chat'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Creates the hosting link
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// Creates an apollo client 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Psuedo routing system to help link between pages
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/users" component={SelectEmployees} />
      <Route path="/chat" component={Chat} />
      <Route path='/home' component={() => {
          window.location.href = 'https://syrghq.com';
          return null;
        }}/>
      <Route path='/support' component={() => {
          window.location.href = 'https://support.syrg.app/hc/en-us';
          return null;
        }}/>
      <Route path='/support' component={() => {
          window.location.href = 'https://syrghq.com/solution';
          return null;
        }}/>
    </div>
  </Router>
)

ReactDOM.render(
	routing,
  document.getElementById('root')
  )
