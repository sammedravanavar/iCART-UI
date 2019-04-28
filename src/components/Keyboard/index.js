import React from 'react';
// import './../css/main.css';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

class KeyBoard extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         layoutName: "default",
         input: "",
       };
   }
  
    onChange = input => {
      this.setState({
        input: input
      });
    //   this.keyboard.setInput(input)
      this.props.getInput(this.state.input)
      // console.log("Input changed", input);
    };
  
    onKeyPress = button => {
      // console.log("Button pressed", button);
      if (button === "{shift}") this.handleShift();
      else if (button === "{num}") this.setState({layoutName: "num"});
      else if (button === "{abc}") this.setState({layoutName: "default"});
    };
  
    handleShift = () => {
      let layoutName = this.state.layoutName;
      this.setState({
        layoutName: layoutName === "default" ? "shift" : "default"
      });
    };

    setInput = (input) => {
        this.setState({
            input: input
        })
        // console.log(this.keyboard)
        // console.log('reset')
        // this.keyboard.setInput("");
    }

   render() {
     let pad = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
      return (
        <Keyboard
            baseClass = {this.props.baseClass}
            style={{margin: 0}}
            ref={r => (this.keyboard = r)}
            inputName={this.props.inputName}
            layoutName={this.state.layoutName}
            layout={{
              default: [
                "q w e r t y u i o p",
                "a s d f g h j k l",
                "{shift} z x c v b n m {bksp}",
                "{num} , {space} . {enter}"
              ],
              shift: [
                "Q W E R T Y U I O P",
                "A S D F G H J K L",
                "{shift} Z X C V B N M {bksp}",
                "{num} , {space} . {enter}"
              ],
              num: [
                "1 2 3 4 5 6 7 8 9 0",
                "@ # \u20B9 & _ - ( ) = %",
                "{shift} \" * ' : / ! ? + {bksp}",
                "{abc} , {space} . {enter}"
              ]
            }}
            display = {{
              "{bksp}": "\u232B",
              "{enter}": "\u23CE",
              "{shift}": "\u2302",
              "{space}" : pad+"\u2423"+pad,
              "{num}" : "123",
              "{abc}" : "abc"
            }}
            onChange={input => this.onChange(input)}
            onKeyPress={button => this.onKeyPress(button)}
        />
      );
   }
}

export default KeyBoard;