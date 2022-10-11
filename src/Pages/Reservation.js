import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/icon.png";

const Reservation = () => {
  React.useEffect(() => {
    fetchCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CompanyId = localStorage.getItem("company");
  const url = `https://localhost:7216/api/Reservations/${CompanyId}/ReservationByCompId`;
  var d;
  const fetchCompanyData = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        async: true,
        crossDomain: true,
        "Access-Control-Allow-Origin": "*",
      },
    });

    try {
      d = await response.json();
      localStorage.setItem("reservations", JSON.stringify(d));
    } catch (error) {
      throw new Error("Not able to fetch data");
    }
  };

  const dataSource = JSON.parse(localStorage.getItem("reservations"));

  console.log(dataSource);
  return (
    <div>
      <Link to="/Home">
        <img
          alt="logo"
          src={Logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{" "}
      </Link>
      <ScheduleComponent
        selectedDate={new Date(2022, 9, 30)}
        currentView="Month"
        eventSettings={{
          dataSource: dataSource,
          fields: {
            id: "id",
            subject: { name: "title", default: "meeting" },
            startTime: { name: "startDate" },
            endTime: { name: "endDate" },
            location: { name: "relatedRoom" },
          },
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};
export default Reservation;
