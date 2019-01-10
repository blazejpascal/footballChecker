import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from  'react-apollo'
import DEFAULT_QUERY from '../../../../../../consts/query'
import { upgradeStatus} from "../../../../../../consts/mutations";

import './CounterWithMutation.less'

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
        this.removeFromLocal();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        if (diff <= 0) {
            this.props.mutate({
                update: (cache, mutationResults) => {
                    cache.writeQuery({
                        query: DEFAULT_QUERY,
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

    removeFromLocal() {
        localStorage.removeItem('jwtToken')
    }

    render() {
        const countDown = this.state;

        return (
            <div className={`countdown ${this.props.cssClass}`}>
                <span className="countdown__min">
                    {this.addLeadingZeros(countDown.min)}
                </span>
                <span className="countdown__separator">
                    :
                </span>
                <span className="countdown__sec">
                  {this.addLeadingZeros(countDown.sec)}
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

const CounterWithMutation = graphql(upgradeStatus)(Countdown)
export default CounterWithMutation;
