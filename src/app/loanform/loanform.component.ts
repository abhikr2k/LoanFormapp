import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {
   title='LoanForm';
   sal:number=0;
   loanamount:number=0;

   isDisabled=false;
   res:string=" ";
  constructor() { }

  ngOnInit(): void {
  }


   onSave()
  {
    console.log("Button clicked");
    if(this.sal>100000&&this.sal>this.loanamount && this.sal<500000){
      this.res="Customer is Eligible for loan upto 2 lakhs";
      alert("Eligible Congratulations");
    }

    
    else if(this.sal>500000&&this.sal>this.loanamount&& this.sal<1000000){
      this.res="Customer is Eligible for loan upto 5 lakhs";
      alert("Eligible Congratulations");
    }

    else if(this.sal>1000000&&this.sal>this.loanamount){
      this.res="Customer is Eligible for loan upto 10 lakhs";
      alert("Eligible Congratulations");
    }
    else{
      alert("your annual salary is "+this.sal+"which is less than the loan amount "+this.loanamount)
      alert("Not Eligible Sorry!!");
      this.res="Customer not eligible Try later and salary should be greater than 100000";
    }
    
  }
  

}
