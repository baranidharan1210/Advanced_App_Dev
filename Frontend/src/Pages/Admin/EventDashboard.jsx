import React from "react";
import EventsTable from "../../components/Admin/EventsTable";
import EventCard from "../../components/Admin/EventCard";
import Header from "../../components/Admin/Header";

const EventDashboard = () => {
  return (
    <>
      <div class="col-span-8 overflow-hidden rounded-xl sm:px-8">
        <Header title={"Upcoming events"} />
        <EventCard />
        <Header title={"Completed events"} />
        <EventsTable />
      </div>
    </>
  );
};

export default EventDashboard;
