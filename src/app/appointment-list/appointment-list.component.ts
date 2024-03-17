import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit() {
    this.appointments = JSON.parse(
      localStorage.getItem('appointments') || '[]'
    );
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      this.appointments.push({
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      });

      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    } else {
      alert('Please select a date and enter a title');
    }
  }
  removeAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter(
      (a) => a.id !== appointment.id
    );
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
