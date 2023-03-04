import Calendar from 'react-calendar';
import './CustomCalendar.scss';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

function CustomCalendar() {
  const [months, setMonths] = useState();
  return (
    <div className="calendar">
      <div className="months-container">
        <h5>Marzo</h5>
        <h5>Abril</h5>
      </div>
      <div className="calendar-container">
        <button>
          <FaChevronLeft />
        </button>
        <Calendar
          locale="es"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'narrow' })
          }
          showDoubleView={true}
          showNavigation={false}
        />
        <button>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CustomCalendar;
