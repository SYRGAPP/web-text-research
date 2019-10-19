{/* Code put together with the help of https://react.semantic-ui.com/elements/list/#variations-celled */}
import React from 'react'
{/* This button is the one used for chat */}
import { Button, Image, List } from 'semantic-ui-react'
{/* This button is the one used for add or remove employee*/}
import Button from 'react-bootstrap/Button'

const ListExampleFloated = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <List.Content>
        <List.Header>Employee One</List.Header>
        Start a Conversation
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <List.Content>
        <List.Header>Employee Two</List.Header>
        Start a Conversation
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <<List.Content>
        <List.Header>Employee Three</List.Header>
        Start a Conversation
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <List.Content>
        <List.Header>Employee Four</List.Header>
        Start a Conversation
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleFloated




function EmployeeSelection(){
  return(
    <div className = "EmployeeSelection">
    <p style="text-align:right;"><Button variant="primary" size="sm">
      Sign Out
    </Button>
    </p>
    <h2>Chats</h2>
    <div role="list" class="ui divided middle aligned list">
      <div role="listitem" class="item">
        <div class="right floated content"><button class="ui button">Add</button></div>
        <div class="content">
          <div class="header">Employee One</div>
          Start a conversation
        </div>
      </div>
      <div role="listitem" class="item">
        <div class="right floated content"><button class="ui button">Add</button></div>
        <div class="content">
          <div class="header">Employee Two</div>
          Start a conversation
        </div>
      </div>
      <div role="listitem" class="item">
        <div class="right floated content"><button class="ui button">Add</button></div>
        <div class="content">
          <div class="header">Employee Three</div>
          Start a conversation
        </div>
      </div>
      <div role="listitem" class="item">
        <div class="right floated content"><button class="ui button">Add</button></div>
        <div class="content">
          <div class="header">Employee Four</div>
          Start a conversation
        </div>
      </div>
    </div>
    <Button variant="link">Add New Employee</Button>
    <Button variant="link">Remove Selected Employees</Button>
    <Button variant="primary">Start Chat with Added Employees</Button>
    </div>
  )

}
