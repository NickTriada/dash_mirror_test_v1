import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarWidget() {
  const [date, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}



