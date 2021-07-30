import React from "react";
import { connect } from 'react-redux';
import marked from "marked";

const Write = ({text, fullsize, toogleWrite}) => {
    marked.setOptions({
        breaks: true
    });
    
    if(!fullsize || fullsize === 2) {
        return (
            <div className="box write">
                <header>
                    <span>Previewer</span>
                    <span 
                        className="fullsize"
                        onClick={toogleWrite}>BIG</span>
                </header>
                <span 
                    id="preview" 
                    dangerouslySetInnerHTML={{__html: marked(text)}}>
                </span>
            </div>
        );
    } else {
        return (<div></div>);
    }
};

const mapStateToProps = state => ({
    text: state.text,
    fullsize: state.fullsize
});

const mapDispatchToProps = dispatch => ({
    toogleWrite() {
        dispatch({
            type: "CHANGE_SIZE",
            current_box: 2
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);