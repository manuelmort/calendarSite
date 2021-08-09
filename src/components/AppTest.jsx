import React from "react";
import * as dateFns from "date-fns";
import Clock from './Clock'


class Car extends React.Component {

    state = {
        currentMonth: new Date(),
        currentDay:  new Date(),
        currentTime: new Date()
    }

    renderCurrentTime() {
        
    }
    
    renderCurrentDay() {
        const week = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday"]
        var dayElement = this.state.currentDay
        
        var dayOfWeek = week[dayElement.getDay()]
        
        return (dayOfWeek);

    }
    renderThis(){
        
        const dateFormat = "d MMMM yyyy"
        
        return (
            <div>
                <p>Today is:</p>
                <span>{this.renderCurrentDay()}</span> <br></br>
                
                <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                <h2>Learning This weird language</h2>
            </div>
        )
    }

    render() {
        return this.renderThis()
    }
}

export default Car;