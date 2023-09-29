const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <h1>Log Entries</h1>
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              <br />
              <a href={`/logs/${log._id}/edit`}>Edit</a>
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
            </li>
          ))}
        </ul>
        <a href="/logs/new">Create new log entry</a>
      </div>
    );
  }
}

module.exports = Index;
