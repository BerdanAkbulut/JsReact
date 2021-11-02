import React, { Component } from 'react'

export default class CComponent extends Component {
    state= {
        message:"Sınıf Component",
        time:new Date().toString()
    }
    componentDidMount() {
        console.log("Ben geldim")
    }
    componentDidUpdate() {
        console.log("Ben güncellendim")
    }

    componentWillUnmount() {
        console.log("Ben gittim")
    
    }
    showDate = () => {
        this.setState({time:new Date().toString()})
    }

    render() {
        return (
            <div>
                {this.state.message}
                <div>{this.state.time}</div>
            </div>
        )
    }
}

