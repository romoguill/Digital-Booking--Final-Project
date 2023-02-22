import "react-datepicker/dist/react-datepicker.css";
import './HomeSearch.scss';
import classNames from "classnames";
import React, { useState, forwardRef } from "react";
import es from "date-fns/locale/es";
import axios from "axios";
import AsyncSelect from "react-select/async";
import { createFilter, components } from "react-select";
import DatePicker, { registerLocale, CalendarContainer } from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

registerLocale("es", es);

function HomeSearch() {
  const calRef = React.useRef();
  const [location, setLocation] = useState(null);
  const [dates, setDates] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onDatepickerChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const CustomLocationControl = ({ children, ...props }) => (
    <components.Control {...props}>
      <FontAwesomeIcon icon={faLocationDot} /> {children}
    </components.Control>
  );

  const CustomLocationOption = props => (
    <components.Option {...props}>
      <div className="search-location-option">
        <span className="search-location-option-icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <p className="search-location-option-value">
          <span className="search-location-option-city">{props.data.label}</span><br />
          {props.data.country}
        </p>
      </div>
    </components.Option>
);

  const CustomLoadLocationOptions = (query, callback) => {
    axios(`src/Common/JSON/ciudades.json?s=${query}`)
      .then((response) => {
        callback(response.data.map(({ id, name, country }) => ({
          value: id,
          label: name,
          country: country
        })));
      });
  }

  const CustomCalendarInput = forwardRef(({ value, onClick }, ref) => (
    <div className="search-dates">
      <FontAwesomeIcon icon={faCalendarDay} />
      <input onClick={onClick} ref={ref} value={value} placeholder="Check In - Check Out" onChange={setDates} />
    </div>
  ));

  const CustomCalendarContainer = ({ className, children }) => {
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
          <AsyncSelect
            options={[]}
            filterOption={createFilter({ ignoreAccents: true })}
            loadOptions={CustomLoadLocationOptions}
            components={{ Control: CustomLocationControl, Option: CustomLocationOption, DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            placeholder="¿A dónde vamos?"
            classNames={{
              control: ({ isDisabled, isFocused }) =>
                classNames(
                  "search-location"
                ),
              valueContainer: (state) =>
                classNames(
                  "search-location-value"
                ),
              menu: (state) =>
                classNames(
                  "search-location-menu"
                ),
              option: ({ isDisabled, isFocused, isSelected }) =>
                classNames(
                  isSelected && 'search-location-option-selected',
                  !isSelected && isFocused && 'search-location-option-focused'
                ),
            }}
          />
          <div>
            <DatePicker
              ref={calRef}
              locale="es"
              monthsShown={2}
              minDate={new Date()}
              showDisabledMonthNavigation
              onChange={onDatepickerChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              calendarContainer={CustomCalendarContainer}
              shouldCloseOnSelect={false}
              dateFormat="dd MMM yyyy"
              customInput={<CustomCalendarInput />}
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
