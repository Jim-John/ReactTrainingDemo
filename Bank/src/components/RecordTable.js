import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Filter from "./Filter";
import Button from "@material-ui/core/Button";
class RecordTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFilter: "2019-11-29",
      txns: this.props.txns
    };

    this.filter = this.filter.bind(this);
   this.handleDateChange = this.handleDateChange.bind(this);
    this.sort = this.sort.bind(this);
  }
   filter() {
    this.setState({...this.state,txns:this.state.txns.filter(e=>e.date==this.state.dateFilter)})
   }
  handleDateChange = event => {
   this.setState({...this.state,dateFilter:event.target.value});
  }; 

  sort() {
    let temp=this.state.txns.sort((txn1,txn2)=>{ return txn1.amount-txn2.amount});
    console.log('temp:'+JSON.stringify(temp))
    this.setState({...this.state,txns:temp})
  }
  render() {
    return (
      <div>
        <Filter  handleDateChange={this.handleDateChange}  filter={this.filter} /> 
        <br/>
        <br />
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "darkgray" }}>
              <TableCell className="table-header">Date</TableCell>
              <TableCell className="table-header">Description</TableCell>
              <TableCell className="table-header">Type</TableCell>
              <TableCell className="table-header">
                <Button id="amount" onClick={this.sort.bind(this)}>
                  Amount ($)
                </Button>
              </TableCell>
              <TableCell className="table-header">Available Balance</TableCell>
            </TableRow>
          </TableHead>
          {
          this.state.txns &&
          this.state.txns.map((txn, index) => {
            return(
          <TableBody key={index}>
            <TableRow>
              <TableCell>{txn.date}</TableCell>
              <TableCell>{txn.description}</TableCell>
              <TableCell>{txn.type === 1 ? "Debit" : "Credit"}</TableCell>
              <TableCell>{txn.amount}</TableCell>
              <TableCell>{txn.balance}</TableCell>
            </TableRow>
          </TableBody>)
          })
        }
        </Table>
      </div>
    );
  }
}

export default RecordTable;
