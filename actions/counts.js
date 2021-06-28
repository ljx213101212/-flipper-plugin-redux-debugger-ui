import {COUNTER_CHANGE} from '../constants';
export function changeCount(count) {
  console.log('COUNTER_CHANGE', count);
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
