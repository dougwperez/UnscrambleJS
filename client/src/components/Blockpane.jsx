// import React from 'react';

// class Box extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div
//         className="
//                    "
//         style={{ backgroundColor: this.props.box.color }}
//         draggable={this.props.draggable}
//         onDragStart={this.props.onDragStart({ id: this.props.box.id })}
//         onDragOver={this.props.onDragOver({ id: this.props.box.id })}
//         onDrop={this.props.onDrop({ id: this.props.box.id })}
//       >
//         <div className="content">{this.props.box.name}</div>
//       </div>
//     );
//   }
// }

// class BlockPane extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       boxes: [
//         { id: 1, name: "BOX1", color: "red" },
//         { id: 2, name: "BOX2", color: "green" },
//         { id: 3, name: "BOX3", color: "blue" },
//         { id: 4, name: "BOX4", color: "orange" },
//         { id: 5, name: "BOX5", color: "pink" },
//         { id: 6, name: "BOX6", color: "yellow" }
//       ]
//     }
//   }

//   render() {
//     // console.log("Test", props.currentQ.Answer)
//     return (
//       <div>
//         <h2>Blocks</h2>
//         <div>Scrambled Answer here</div>
//       </div>
//     )
//   }
// }

// export default BlockPane;
