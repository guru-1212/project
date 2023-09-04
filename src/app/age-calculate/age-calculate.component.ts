import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculate',
  templateUrl: './age-calculate.component.html',
  styleUrls: ['./age-calculate.component.scss']
})
export class AgeCalculateComponent {
   calculateAge() {
    const birthDateInput = document.getElementById('birthdate') as HTMLInputElement;
  
    if (!birthDateInput) {
     var Err:any=document.getElementById("err_msg");
     Err.innerHTML="Plz Enter valid Date of birth"
      return;
    }
  
    const birthdateValue = birthDateInput.value;
  
    if (!birthdateValue) {
      var Err:any=document.getElementById("err_msg");
      Err.innerHTML="Plz Enter valid Date of birth"
      return;
    }
  
    const birthdate = new Date(birthdateValue);
    const currentDate = new Date();
  
    const ageInMilliseconds = currentDate.getTime() - birthdate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
    const ageOutput = document.getElementById('ageOutput');
  
    if (ageOutput) {
      $("#err_msg").hide();
      ageOutput.innerHTML = `${ageInYears.toFixed(2)} years`;
    }
  }
  
  
  


}
