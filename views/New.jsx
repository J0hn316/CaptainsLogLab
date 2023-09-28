const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST">
          Title: <input type="text" />
          <br />
          Entry: <input type="textarea" />
          <br />
          Ship is broken: <input type="checkbox" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
