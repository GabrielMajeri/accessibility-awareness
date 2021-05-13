import {
  Calendar as ReactBigCalendar,
  dateFnsLocalizer,
  Messages,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { format, parse, startOfWeek, getDay } from "date-fns";
import roLocale from "date-fns/locale/ro";
import PageHeading from "../components/PageHeading";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "ro-RO": roLocale,
  },
});

const makeInternationalDayEvent = (
  title: string,
  month: number,
  day: number
) => {
  const date = new Date(2021, month - 1, day);
  return {
    title,
    allDay: true,
    start: date,
    end: date,
  };
};

const EVENTS_LIST = [
  makeInternationalDayEvent("World Braille Day", 1, 4),
  makeInternationalDayEvent("World Haemophilia Day", 4, 17),
  {
    title: "Deaf Awareness Week",
    allDay: true,
    start: new Date(2021, 4, 4),
    end: new Date(2021, 4, 10),
  },
  makeInternationalDayEvent("World Asthma Day", 5, 5),
  {
    title: "Mental Health Awareness Week",
    allDay: true,
    start: new Date(2021, 4, 18),
    end: new Date(2021, 4, 24),
  },
  {
    title: "Learning Disability Week",
    allDay: true,
    start: new Date(2021, 5, 17),
    end: new Date(2021, 5, 23),
  },
  makeInternationalDayEvent(
    "Ziua Internațională a Persoanelor cu Dizabilități",
    12,
    3
  ),
];

const MESSAGES_RO: Messages = {
  today: "Astăzi",
  previous: "Înapoi",
  next: "Următorul",
  month: "Lună",
  agenda: "Program",
};

const Calendar: React.FC = () => (
  <>
    <header className="m-4">
      <PageHeading text="Calendar" />
      <p className="text-center">
        Această pagină afișează toate zilele internaționale pentru persoanele cu
        dizabilități din perioada următoare.
      </p>
    </header>
    <ReactBigCalendar
      culture="ro-RO"
      localizer={localizer}
      events={EVENTS_LIST}
      defaultDate={new Date()}
      views={["month", "agenda"]}
      defaultView="month"
      style={{ height: "70vh" }}
      messages={MESSAGES_RO}
    />
    <p className="m-4">
      Organizează și tu un eveniment de conștientizare în comunitatea ta și
      dă-ne tag cu <i>#ȘiEuPotSăLucrez</i>!
    </p>
  </>
);

export default Calendar;
