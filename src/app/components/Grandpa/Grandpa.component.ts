import { Component } from '@angular/core';
import { DadComponent } from "../text2/text2.component";

@Component({
    selector: 'app-Grandpa',
    standalone: true,
    templateUrl: './Grandpa.component.html',
    styleUrl: './Grandpa.component.css',
    imports: [DadComponent]
})
export class GrandpaComponent{

}
