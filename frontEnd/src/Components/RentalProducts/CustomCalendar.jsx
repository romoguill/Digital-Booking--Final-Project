import Calendar from 'react-calendar';
import { Navigation } from 'react-calendar';
import './CustomCalendar.scss';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCallback, useEffect, useRef, useState } from 'react';

import useWindowSize from '../../Hooks/useWindowSize';

function CustomCalendar() {
  const [value, setValue] = useState(new Date());
  const [actualDate, setActualDate] = useState(null);
  const [nextDate, setNextDate] = useState(null);
  const [node, setNode] = useState(null);

  const calendarRef = useCallback((node) => {
    if (node) {
      setNode(node);
      console.log('updated');
    }
  });

  // TODO : Traer el valor de los bp de sass a react
  const windowSize = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    windowSize.width <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);

  useEffect(() => {
    setActualDate(
      node?.querySelector('.react-calendar__navigation__label__labelText--from')
        .textContent
    );
    setNextDate(
      node?.querySelector('.react-calendar__navigation__label__labelText--to')
        .textContent
    );
  }, [node]);

  const handleGoToNextMonth = () => {
    node?.querySelector('.react-calendar__navigation__next-button').click();
  };

  const handleGoToPrevMonth = () => {
    node?.querySelector('.react-calendar__navigation__prev-button').click();
  };

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const onActiveStartDateChange = () => {
    setActualDate(
      node?.querySelector('.react-calendar__navigation__label__labelText--from')
        .textContent
    );

    setNextDate(
      node?.querySelector('.react-calendar__navigation__label__labelText--to')
        .textContent
    );
  };

  return (
    <div className="calendar">
      <div className="months-container">
        <h5>
          {actualDate && actualDate[0].toUpperCase() + actualDate.slice(1)}
        </h5>
        {!isMobile && (
          <h5>{nextDate && nextDate[0].toUpperCase() + nextDate.slice(1)}</h5>
        )}
      </div>
      <div className="calendar-container">
        <button onClick={handleGoToPrevMonth}>
          <FaChevronLeft />
        </button>
        <Calendar
          showNavigation={true}
          value={value}
          onChange={onChange}
          locale="es"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'narrow' })
          }
          showDoubleView={!isMobile ? true : false}
          inputRef={calendarRef}
          onActiveStartDateChange={onActiveStartDateChange}
        />

        <button onClick={handleGoToNextMonth}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CustomCalendar;
