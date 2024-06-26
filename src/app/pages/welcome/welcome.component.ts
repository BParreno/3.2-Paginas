import { Component, OnInit } from '@angular/core';
import { GrandpaComponent } from "../../components/Grandpa/Grandpa.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [GrandpaComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
