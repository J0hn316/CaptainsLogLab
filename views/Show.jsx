const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>{log.title}</h1>
        <p>Log Entry: {log.entry}</p>
        <p>Ship Is Broken: {log.shipIsBroken ? "Yes" : "No"}</p>
        <a href="/logs">Back to Log Entries</a>
      </div>
    );
  }
}

module.exports = Show;
