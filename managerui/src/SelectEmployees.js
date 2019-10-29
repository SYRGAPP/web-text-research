import React from 'react'
import Logo from './whiteLogo.png'
import './SelectEmployees.css'
import {Image, List} from 'semantic-ui-react'
import { Button } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
//import {Button as Button2} from './Button.js'

{/* Code put together with the help of https://react.semantic-ui.com/elements/list/#variations-celled */}




  function EmployeeSelection(){
    const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    });

    const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    };

    return(
      <div className = "EmployeeSelection">
      <div className = "Header">
      <div className = "SOButton"><Button>
        Sign Out
      </Button>
      <img src={Logo} alt= "SYRG logo" className = "image"/>
      </div>
      </div>
      <h1>Chats</h1>

      <FormGroup column>
      <div class = "content">
      <FormControlLabel
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="checkedA"
          control={<Checkbox color="primary" />}
          label=<div class = "EmployeeName">Employee One</div>
          labelPlacement="end"
      />
      <div> Start a conversation </div>
      </div>
      <p></p>
      <div class = "content">
      <FormControlLabel
          checked={state.checkedB}
          onChange={handleChange('checkedB')}
          value="checkedB"
          control={<Checkbox color="primary" />}
          label=<div class = "EmployeeName">Employee Two</div>
          labelPlacement="end"
      />
      <div> Start a conversation </div>
      </div>
      <p></p>
      <div class = "content">
      <FormControlLabel
          checked={state.checkedC}
          onChange={handleChange('checkedC')}
          value="checkedC"
          control={<Checkbox color="primary" />}
          label=<div class = "EmployeeName">Employee Three</div>
          labelPlacement="end"
      />
      <div> Start a conversation </div>
      </div>
      <p></p>
      <div class = "content">
      <FormControlLabel
          checked={state.checkedD}
          onChange={handleChange('checkedD')}
          value="checkedD"
          control={<Checkbox color="primary" />}
          label=<div class = "EmployeeName">Employee Four</div>
          labelPlacement="end"
      />
      <div> Start a conversation </div>
      </div>
      </FormGroup>

      <p>
      <div class = "CenteredButton">
      <Button>Add New Employee</Button>
      </div>
      </p>
      <p>
      <div class = "CenteredButton">
      <Button>Remove Selected Employees</Button>
      </div>
      </p>
      <p>
      <div class = "CenteredButton">
      <Button variant="contained" color="primary">Start Chat with Selected Employees</Button>
      </div>
      </p>
      </div>
    )


  }
  export default EmployeeSelection
