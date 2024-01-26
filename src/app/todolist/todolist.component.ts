import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgFor,
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  taskarray = [{ taskname: 'Walking', iscompleted: false }];

  onsubmit(form: NgForm) {
    console.log(form);

    this.taskarray.push({
      taskname: form.controls['task'].value,
      iscompleted: false,
    });

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskarray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskarray);
    this.taskarray[index].iscompleted = !this.taskarray[index].iscompleted;
  }
}
