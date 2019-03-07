import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import countries from './Country-capital';


const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
  },
  button: {
    margin: '23px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

const rand = {

}


class OutlinedTextFields extends React.Component {
  state = {
    city: 'Yerevan',
    empty: ''
  };

  handleChange = name => event => {
    this.setState({
        [name]:rand
    });
  };


  render() {
    const { classes } = this.props;
    return (
      <form 
        className={classes.container}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
        }}
        >
        <TextField
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />

        <TextField
          disabled
          label="Phone number"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='onlytext'
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          helperText="Requires verification. Will not be publishd"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />
        <TextField
          label="Confirm Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          type="text"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />
        
        <TextField
          id="outlined-select-currency-native"
          select
          label="City"
          className={classes.textField}
          value={this.state.city}
          onChange={this.handleChange('city')}
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select your city"
          margin="normal"
          variant="outlined"
        >
          {countries.map(option => (
            <option key={option.country} value={option.city}>
              {option.city}
            </option>
          ))}
          
        </TextField>
    
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue=""
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
            flexDirection: "column"
          }}
        >
        <createCaptcha />
        </TextField>
        <Button variant="contained" color="primary" className={classes.button}>
        Registr
        </Button>
    </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);