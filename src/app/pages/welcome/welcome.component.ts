import { Component, OnInit } from '@angular/core';
import { Text1Component } from "../../components/text1/text1.component";
import { Text2Component } from "../../components/text2/text2.component";
import { Text3Component } from "../../components/text3/text3.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [Text1Component, Text2Component, Text3Component]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
