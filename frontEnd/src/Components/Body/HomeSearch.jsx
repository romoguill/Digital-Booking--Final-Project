import React, { useState, forwardRef } from "react";
import DatePicker, { registerLocale, CalendarContainer } from "react-datepicker";
import es from "date-fns/locale/es";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import './HomeSearch.scss';

registerLocale("es", es);

function HomeSearch() {
  const calRef = React.useRef();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const MyCalendarInput = forwardRef(({ value, onClick }, ref) => (
    <div className="search-dates">
      <FontAwesomeIcon icon={faCalendarDay} />
      <input onClick={onClick} ref={ref} value={value} placeholder="Check In - Check Out" />
    </div>
  ));

  const MyCalendarContainer = ({ className, children }) => {
    return (
      <div className="calendar-container">
        <CalendarContainer className={className}>
          <div>{children}</div>
          <div className="calendar-footer">
            <div className="calendar-options">
              <button
                onClick={() => {
                  calRef.current.setOpen(false);
                }}
                className="button-primary button-primary--full"
              >
                Aplicar
              </button>
            </div>
          </div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="home-search">
      <div className="container-main">
        <h1>Busca ofertas de casas, departamentos y mucho más</h1>
        <form className="search-by-location-date">
          <div className="search-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <input type="text" name="location" placeholder="¿A dónde vamos?" />
          </div>
          <div>
            <DatePicker
              ref={calRef}
              locale="es"
              monthsShown={2}
              minDate={new Date()}
              showDisabledMonthNavigation
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              calendarContainer={MyCalendarContainer}
              shouldCloseOnSelect={false}
              dateFormat="dd MMM yyyy"
              customInput={<MyCalendarInput />}
            />
          </div>
          <button className="button-primary button-primary--full">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeSearch;
