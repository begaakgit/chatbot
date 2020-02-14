import React, { Component } from 'react'
import { Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
class DummyCalender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };


  }
  render() {
    return <ScheduleComponent>
<Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
    </ScheduleComponent>
  }
}

export default DummyCalender

