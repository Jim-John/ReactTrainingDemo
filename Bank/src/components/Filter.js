import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Filter extends Component {
  constructor(props)
  {
    super(props);
    this.check=this.check.bind(this);
  }
  check(param)
  {
 alert(param);
  }
  render() {

    return (
      <div>
      <span style={{ verticalAlign: "bottom" }}>
        Filter By: &nbsp;&nbsp;&nbsp;{" "}
      </span>

      <TextField
        id="date"
        label="Transaction Date"
        type="date"
        defaultValue="2019-11-29"
        InputLabelProps={{
          shrink: true
        }}
        onChange={(event) => this.props.handleDateChange(event) }
      />
      <span style={{ verticalAlign: "bottom" }}>
        <Button  variant="contained" onClick={() => this.props.filter() }>
          Filter
        </Button>
      </span>
    </div>
    );
  }
 
}
export default Filter;
