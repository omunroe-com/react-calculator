import { PERCENT } from '../actions/constants';

function percent(state = 0, action) {
    let { historyDisplay, displayValue, calculated } = action.data;

    switch (action.type) {
        case PERCENT:
            var output = eval(`${state}${displayValue}`) / 100;
            output = output.toString().replace(/\./,',');
            if(historyDisplay.length === 0) {
                output = 0;
            }
            return output;
    }
    return state;
}

export default percent;