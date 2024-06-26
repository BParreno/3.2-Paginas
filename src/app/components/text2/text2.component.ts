import { Component } from '@angular/core';
import { SonComponent } from "../text3/text3.component";

@Component({
    selector: 'app-Dad',
    standalone: true,
    templateUrl: './text2.component.html',
    styleUrl: './text2.component.css',
    imports: [SonComponent]
})
export class DadComponent {

}
