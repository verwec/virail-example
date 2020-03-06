import Moment from 'moment';
import {extendMoment} from 'moment-range';

export const nextSevenDays = () => {
  const moment = extendMoment(Moment);
  const range = moment.range(moment(), moment().add(7, 'day'));
  const days = Array.from(range.by('day'));

  return days.map( day => day.format('YYYY-MM-DD') )
};
