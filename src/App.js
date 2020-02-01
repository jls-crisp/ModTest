import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    
    this.handleClick = this.handleClick.bind(this)
  }
  
 
  // bgColours = {
  //   "Default": "#ffffff",
  //   "Possible": "#cccccc",
  //   "Definite": "#444444"
  // }

  handleClick(e) {
    // this.setState({
    //   count: 1
    // })
    // console.log(this.state.count)

    var lineItem = e.target.className;
    console.log(lineItem);




    if(lineItem === "modItem") {

      e.target.className = "modItemSelected";

    } else if (lineItem === "modItemContent") {

      if(e.target.parentNode.className === "modItem") {

        e.target.parentNode.className = "modItemSelected";

      } else if(e.target.parentNode.className === "modItemSelected") {
        e.target.parentNode.className = "modItemSelected2";
      }

    } else if (lineItem === "modItemSelected") {
      e.target.className = "modItemSelected2";
    }



    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }))
  }


  // select(props) {
  //   console.log(props);

  //   // document.body.style = 'background: black;'
  //   // this.setState({
  //   //   backgroundcolor: 'black'
  //   // }
  // }

  // selectId = "booyah"


  renderRow = ({ index, isScrolling, key, style}) => {
    return (
      <div className={"modItem"} key={key} style={style} onClick={this.handleClick} >
      {/* <div className={"modItem"} key={key} style={style} onClick={e => e.target.className = "modItemSelected"} > */}
        <div className={"modItemContent"}>{this.props.data[index].name}</div>
      </div>
    )
  }
  render() {
    return (
      <AutoSizer>
      {
        ({ width, height }) => {
          return <List
            rowCount={this.props.data.length}
            width={width}
            height={height}
            rowHeight={70}
            rowRenderer={this.renderRow}
          />
        }
      }
      </AutoSizer>
    );
  }
}

export default App;
