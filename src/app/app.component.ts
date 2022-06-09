import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanapp';


  
   type:string=" ";

   isDisabled=false;
   res:string=" ";
  constructor() { }

  onSave()
  {
    console.log("Button clicked");
  //   if(this.type=="home loan"){
  //     this.res="go for the home loan and proceed the further procedures";
  //     alert("fill the form to apply the home loan");
  //   }
  

  //  else if(this.type=="personal loan"){

  //   this.res="go for the personal loan and proceed the further procedures";
  //   alert("fill the form to apply the Personal loan");
  //  }

  //  else if(this.type=="business loan"){

  
  //   this.res="go for the business loan and proceed the further procedures";
  //  alert("fill the form to apply the Business loan");
  //  }
  // }
   this.res="go for the selcted type of loan and fill the form";
   alert("fill the form to apply for the loan of type"+this.type);

  }
}
