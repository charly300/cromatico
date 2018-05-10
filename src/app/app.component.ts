import { Component } from '@angular/core'
import { Color } from './color'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public squares: number
    public colors: Color[]

    public onSubmit() { 
        this.colors = this.generateColors()
    }

    private generateColors() {
        let c = []
        for(let i = 0; i < this.squares; i++) {
            let hue = (360 / this.squares) * i
            c.push(new Color(hue, 100, 50))
        }
        return c
    }

}