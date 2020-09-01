import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import axios from "axios";
import { connect } from "react-redux";

class ClaimsViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claims: [],
      showUpdate: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:7000/claims`).then((res) => {
      const claims = res.data;
      //this.setState({ claims });
      this.dispatchClaimListToStore(claims);
    });
  }
  dispatchClaimListToStore(claimList) {
    console.log("dispatching ClaimList", claimList);
    console.log("dispatching props", this.props);
    this.props.dispatch(this.claimListAction(claimList));
  }

  claimListAction(claimList) {
    return {
      type: "CLAIM_LIST",
      claimList: claimList,
    };
  }
  showUpdate(currentClaim) {
    console.log("updating claim", currentClaim.emp_id);
    browserHistory.push("updateclaim/" + currentClaim.emp_id);
  }

  render() {
    
    let myTr = "";
    let showUpdateContent = this.showUpdate;
    if (this.props.claimList) {
      myTr = this.props.claimList.map(function (claim, index) {
        return (
          
          <tr key={index}>
            <td><a className="updateTdBut" href="#" onClick={() =>showUpdateContent(claim)}>{claim.emp_id}</a></td>
            <td>{claim.emp_name}</td>
            <td>{claim.claim_number}</td>
            <td>{claim.claim_type}</td>
            <td>{claim.claim_program}</td>
            <td>{claim.start_date}</td>
            <td>{claim.end_date}</td>
          </tr>
          
        );
      });
    }
    return myTr;
  }
}
const mapStateToProps = (state) => {
  console.log("App state", state);
  return { claimList: state.claimViewReducer.claimObj };
};
export default connect(mapStateToProps)(ClaimsViewList);
