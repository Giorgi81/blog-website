import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  isHovered : boolean = false
  aquaBack : string = 'aqua'
  transition : string = '1s all'
  border : string = '2px solid white'
  buttonBorder : string = '2px solid white'
  buttonFontColor : string = 'white'

  onMouseOver (){
    this.isHovered = true
    this.aquaBack = 'transparent'
    this.border = 'none'
    this.buttonBorder = '2px solid black'
    this.buttonFontColor = 'black'
    


  }

  onMouseLeave () {
    this.isHovered = false
    this.aquaBack = 'aqua'
    this.border  = '2px solid white'
    this.buttonBorder = '2px solid white'
    this.buttonFontColor = 'white'



  }






}
