import React,{createRef}from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list'
import Events from '../Component/Events';
import Resources from '../Component/Resources';




export default class DemoApp extends React.Component {
  render() {
    const calenderRef=createRef()

    return (
    
      <FullCalendar
        ref={calenderRef}
        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[ dayGridPlugin, timeGridPlugin,resourceTimelinePlugin,listPlugin]}
        initialView="dayGridMonth"
        events={Events}    
        resources={Resources}       
        events="https://fullcalendar.io/demo-events.json?single-daywith-nesting&for-resource-timeline"
        resources="https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
        customButtons={{
            myTimeDaybtn:{
              text:'timeday',
              click(){
                
                  const calender=calenderRef.current;
                  if(calender){
                   const calenderApi=calender.getApi();
                    calenderApi.changeView("timeGridDay");
                  }
               },
             },
             myTimeLineWeekbtn:{
                text:'timelineweek',
                click(){
                  
                    const calender=calenderRef.current;
                    if(calender){
                     const calenderApi=calender.getApi();
                      calenderApi.changeView("resourceTimelineWeek");
                    }
                 },
               },
               myTimelineDaybtn:{
                text:'timelineday',
                click(){
                  
                    const calender=calenderRef.current;
                    if(calender){
                     const calenderApi=calender.getApi();
                      calenderApi.changeView("resourceTimelineDay");
                      
                    }
                 },
               },
               mylistbtn:{
                text:'list',
                click(){
                  
                    const calender=calenderRef.current;
                    if(calender){
                     const calenderApi=calender.getApi();
                      calenderApi.changeView("list");
                      
                    }
                 },
               },
           }}
        headerToolbar={{
            start:'prev,next',
            center:'title',
            end:'today,dayGridDay,dayGridWeek,dayGridMonth,myTimeLineWeekbtn,myTimelineDaybtn,mylistbtn'
          }}
      />
    )
  }
}