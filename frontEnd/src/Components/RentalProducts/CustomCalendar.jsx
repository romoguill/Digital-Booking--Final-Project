import Calendar from 'react-calendar';
import './CustomCalendar.scss';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import useWindowSize from '../../Hooks/useWindowSize';

function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  // TODO : Traer el valor de los bp de sass a react
  const windowSize = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    windowSize.width <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);

  function onChange(nextValue) {
    setValue(nextValue);
    console.log(nextValue);
  }

  const handleGoToNextMonth = () => {
    return;
  };

  const handleGoToPrevMonth = () => {
    return;
  };
  return (
    <div className="calendar">
      <div className="months-container">
        <h5>Marzo</h5>
        <h5>Abril</h5>
      </div>
      <div className="calendar-container">
        <button>
          <FaChevronLeft onClick={handleGoToPrevMonth} />
        </button>
        <Calendar
          value={value}
          onChange={onChange}
          locale="es"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'narrow' })
          }
          showDoubleView={!isMobile ? true : false}
          // showNavigation={false}
          // activeStartDate={new Date('2022-03-04')}
        />
        <button>
          <FaChevronRight onClick={handleGoToNextMonth} />
        </button>
      </div>
    </div>
  );
}

export default CustomCalendar;
