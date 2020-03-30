import { ComponentFactoryResolver, Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-presenter', 
    templateUrl: './title-presenter.component.html', 
    styleUrls: ['./title-presenter.component.css']
})
export class TitlePresenterComponent {
    @Input()
    caption: string;

    @Input()
    color: string = 'white';

}