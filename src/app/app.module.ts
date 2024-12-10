import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { TaskListComponent } from "./task-list/task-list.component";
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
    declarations: [AppComponent, TaskListComponent, StudentListComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}