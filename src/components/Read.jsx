import React from "react";
import { connect } from 'react-redux';

const Read = ({text, fullsize, changeText, toogleRead}) => {
    if(!fullsize || fullsize === 1) {
        return (
            <div className="box read">
                <header>
                    <span>Editor</span>
                    <span 
                        className="fullsize" 
                        onClick={toogleRead}>BIG</span>
                </header>
                <textarea 
                id="editor"
                value={text} 
                className={(fullsize === 1)? "maximized" : ""}
                onChange={(event) => changeText(event.target.value)}>
                    {text}
                </textarea>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
};

const mapStateToProps = state => ({
    text: state.text,
    fullsize: state.fullsize
});

const mapDispatchToProps = dispatch => ({
    changeText(input) {
        dispatch({
            type: "CHANGE_TEXT",
            newText: input
        })
    },
    toogleRead() {
        dispatch({
            type: "CHANGE_SIZE",
            current_box: 1
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Read);