import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './screens/SignIn'
import SelectEmployees from './screens/SelectEmployees'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Sign In</Link>
        </li>
        <li>
          <Link to="/users">Select</Link>
        </li>
        <li>
          <Link to="/contact">Chat</Link>
        </li>
      </ul>
      <Route exact path="/" component={SignIn} />
      <Route path="/users" component={SelectEmployees} />
    </div>
  </Router>
)

ReactDOM.render(
	routing, 
  document.getElementById('root')
  )
