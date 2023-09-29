const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a New Log</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          <br />
          <br />
          Entry: <textarea name="entry"></textarea>
          <br />
          <br />
          Is the Ship Broken?{" "}
          <input type="checkbox" name="shipIsBroken" value="true" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

module.exports = New;
