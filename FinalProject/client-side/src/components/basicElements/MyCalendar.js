import 'react-calendar/dist/Calendar.css';
import '../BasicElementStyle/MyCalendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';

const MyCalendar = (props) => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {

        setDate(date);
    }

    return(

        <div className={"calendar-section pattern-dots-sm slategray h-5"}>
                <Calendar onChange={onChange} value={date} />
                {/* {date.toString()} */}
        </div>

    )
}

export default MyCalendar;