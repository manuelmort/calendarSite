import React, { Component } from 'react'


class Clock extends Component {
    constructor(props){
        super(props)
    }
    state = {
        time: new Date().toLocaleTimeString()
    }
}


export default Clock;