const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Edit Log Entry</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="name" />
          <br />
          <br />
          Entry: <textarea name="entry"></textarea>
          <br />
          <br />
          Is the Ship Broken? <input type="checkbox" name="shipIsBroken" />
          <br />
          <br />
          <input type="submit" value="Update" />
        </form>
        <a href={`/logs`}>Log's Page</a>
      </div>
    );
  }
}

module.exports = Edit;
