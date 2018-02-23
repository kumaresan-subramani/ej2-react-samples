import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import './schedule-component.css';
import { extend } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';

/**
 * Schedule events sample
 */

export class Events extends SampleBase<{}, {}> {
  private data: Object[] = extend([], scheduleData, null, true) as Object[];

  private onClear(): void {
    document.getElementById('EventLog').innerHTML = '';
  }
  private onCreate(): void {
    this.appendElement('Schedule <b>Load</b> event called<hr>');
  }
  private onActionBegin(): void {
    this.appendElement('Schedule <b>Action Begin</b> event called<hr>');
  }
  private onActionComplete(): void {
    this.appendElement('Schedule <b>Action Complete</b> event called<hr>');
  }
  private onActionFailure(): void {
    this.appendElement('Schedule <b>Action Failure</b> event called<hr>');
  }
  private onCellDoubleClick(): void {
    this.appendElement('SChedule <b>Cell Double Click</b> event called<hr>');
  }
  private onCellClick(): void {
    this.appendElement('Schedule <b>Cell Click</b> event called<hr>');
  }
  private onNavigating(): void {
    this.appendElement('Schedule <b>Navigating</b> event called<hr>');
  }
  private onDestroyed(): void {
    this.appendElement('Schedule <b>Destroyed</b> event called<hr>');
  }
  private onEventClick(): void {
    this.appendElement('Schedule <b>Event Click</b> event called<hr>');
  }
  private onPopupOpen(): void {
    this.appendElement('Schedule <b>Popup Open</b> event called<hr>');
  }

  private appendElement(html: string): void {
    let span: HTMLElement = document.createElement('span');
    span.innerHTML = html;
    let log: HTMLElement = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
  }

  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-9 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
              eventSettings={{ dataSource: this.data }} created={this.onCreate.bind(this)}
              actionBegin={this.onActionBegin.bind(this)} actionComplete={this.onActionComplete.bind(this)}
              actionFailure={this.onActionFailure.bind(this)} cellClick={this.onCellClick.bind(this)}
              cellDoubleClick={this.onCellDoubleClick.bind(this)} destroyed={this.onDestroyed.bind(this)}
              navigating={this.onNavigating.bind(this)} eventClick={this.onEventClick.bind(this)}
              popupOpen={this.onPopupOpen.bind(this)}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>
        <div className='col-lg-3 property-section'>
          <PropertyPane title='Event Trace'>
            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
              <tbody>
                <tr id='' style={{ height: '250px' }}>
                  <td>
                    <div className='eventarea' style={{ height: '245px', overflow: 'auto' }}>
                      <span className='EventLog' id='EventLog' style={{ wordBreak: 'normal' }}></span>
                    </div>
                  </td>
                </tr>
                <tr id='' style={{ height: '50px' }}>
                  <td style={{ width: '30%' }}>
                    <div className='evtbtn' style={{ paddingBottom: '10px' }}>
                      <ButtonComponent title='Clear' onClick={this.onClear.bind(this)}>Clear</ButtonComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div>
        <div id='action-description'>
          <p>This demo illustrates the client-side events that triggers on respective Schedule actions and the same is being displayed
          on the event trace panel.</p>
        </div>
        <div id='description'>
          <p>
            In this demo, the client-side events that triggers based on the action taking place in Schedule has been demonstrated. The
          user can make use of these events, if at some point they need to perform some custom actions or any needed additional
          customizations on the available Schedule features.
          </p>
        </div>
      </div>
    );
  }
}