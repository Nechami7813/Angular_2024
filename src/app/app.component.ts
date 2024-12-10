import { Component } from "@angular/core";


@Component({
    // template: `<h1>{{title}}</h1><a href='#'>link</a><br>{{x}}
    // <h2>sub title</h2>
    // <br>{{getTitle()}}`,
    templateUrl: "app.component.html",
    selector: "my-app-root"
})
export class AppComponent {
    x: number = 5;

    title: string = "Hello My - App from title";

    getTitle() {
        return "title from function";
    }

    calc() {
        return 0;
    }

    constructor() {
        //this.x = "sdfs";
    }

}