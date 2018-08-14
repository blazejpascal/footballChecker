import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from  'react-apollo'
import gql from 'graphql-tag'

const updateStatus = gql`
    mutation updateStatus {
        updateStatus {
            isAvailable,
            endTime
      }
}
`

const TRIAL_NAME = gql`
    {
        status {
            isAvailable,
            endTime
        }
    }

`

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) {
            this.props.mutate({
                update: (cache, mutationResults) => {
                    cache.writeQuery({
                        query: TRIAL_NAME,
                        data: {status: mutationResults.data.updateStatus}
                    })
                }
            })

            return false;
        }

        const timeLeft = {
            min: 0,
            sec: 0,
            millisec: 0,
        };

        // calculate time difference between now and expected date
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        return (
            <div className="Countdown">

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Min</span>
          </span>
        </span>

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
            </div>
        );
    }
}

Countdown.propTypes = {
    date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
    date: new Date()
};

const CounterWithMutation = graphql(updateStatus)(Countdown)

export default CounterWithMutation;