import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NativeSyntax: [
        "function",
        "var",
        "const",
        "let",
        "for",
        "else",
        "if",
        "return",
      ],
      testCategory1: [
        ".length",
        ".sort",
        ".prototype",
        ".push",
        "{}",
        "[]",
        "[];",
        "=",
        "++",
        "!==",
        "||",
        "&&",
        "+=",
        "=>",
      ],
      testCategory2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  render() {
    var textLabel;
    if (this.state.NativeSyntax.includes(this.props.box.name)) {
      textLabel = (
        <div className="content" style={{ color: "#000080" }}>
          {this.props.box.name}
        </div>
      );
    } else if (this.state.testCategory1.includes(this.props.box.name)) {
      textLabel = (
        <div className="content" style={{ color: "red" }}>
          {this.props.box.name}
        </div>
      );
    } else if (this.state.testCategory2.includes(this.props.box.name)) {
      textLabel = (
        <div className="content" style={{ color: "#174e13" }}>
          {this.props.box.name}
        </div>
      );
    } else {
      textLabel = (
        <div className="content" style={{ color: "black" }}>
          {this.props.box.name}
        </div>
      );
    }

    return (
      <div
        className="box"
        style={{ backgroundColor: this.props.box.color }}
        draggable={this.props.draggable}
        onDragStart={this.props.onDragStart({ id: this.props.box.id })}
        onDragOver={this.props.onDragOver({ id: this.props.box.id })}
        onDrop={this.props.onDrop({ id: this.props.box.id })}
      >
        {textLabel}
        {/* <div className="content">{this.props.box.name}</div> */}
        {/* {this.props.box.name.match("var") ? (
          <div className="content" style={{ color: "#24F8F6" }}>
            {this.props.box.name}
          </div>
        ) : (
          <div className="content">{this.props.box.name}</div>
        )} */}
        {/* {this.state.NativeSyntax.includes(this.props.box.name) ? (
          <div className="content" style={{ color: "#24F8F6" }}>
            {this.props.box.name}
          </div>
        ) : (
          <div className="content">{this.props.box.name}</div>
        )} */}
      </div>
    );
  }
}

export default Box;
