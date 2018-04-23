// below is course solution
class VisibilityToggle extends React.component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false;
    }
  };
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={this.toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render();






// below is my solution

// console.log('Build it visible is running!');
//
// const app = {
//   title: 'Visibility',
//   details: []
// };
//
// const onShowDetails= () => {
//   app.details = "Here are the details babe!";
//   renderVisibilityApp();
// };
//
// const onRemoveDetails = () => {
//   app.details = [];
//   renderVisibilityApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderVisibilityApp = () => {
//   const template = (
//    <div>
//      <h1>{app.title}</h1>
//      <p>{app.details}</p>
//      { app.details.length > 0 ? <button onClick={onRemoveDetails}>Remove Details</button> : <button onClick={onShowDetails}>Add Details</button> }
//    </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
//
// renderVisibilityApp();
