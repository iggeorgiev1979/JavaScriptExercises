class Time{
    constructor(hours, minutes, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    get hours(){
        return this.__hours
    }
    set hours(value){
        if(value >= 24){
            value %= 24;
        }
        this.__hours = value;
    }

    get minutes(){
        return this.__minutes;
    }
    set minutes(value){
        if(value >= 60){
            this.hours += Math.trunc(value / 60)
            value %= 60;
        }
        this.__minutes = value;
    }

    get seconds(){
        return this.__seconds
    }
    set seconds(value){
        if(value >= 60){
            this.minutes += Math.trunc(value / 60)
            value %= 60;
        }
        this.__seconds = value;
    }

    stringify(arg){
        if(arg < 10){
            return `0${arg}`
        }
        return `${arg}`
    }

    get_time(){
        return `${this.stringify(this.hours)}:${this.stringify(this.minutes)}:${this.stringify(this.seconds)}`
    }


    
}

let tt = new Time(28, 59, 120)
console.log(tt.get_time());

