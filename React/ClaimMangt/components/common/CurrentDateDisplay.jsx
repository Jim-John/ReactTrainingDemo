import moment from "moment";
import React from "react";
class CurrentDateDisplay extends React.Component {
  render() {
    return moment().format("DD-MM-YYYY hh:mm:ss");
  }
}
export default CurrentDateDisplay;
