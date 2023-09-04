import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculate',
  templateUrl: './bmi-calculate.component.html',
  styleUrls: ['./bmi-calculate.component.scss']
})
export class BMICalculateComponent {
  // height: number=0
  // weight: number=0
  // bmi: number | null=0

  calculateBMI() {

    var height: any = $("#height").val();
    var weight: any = $("#weight").val();


    if (height != "" && weight != "") {
      // alert("plz enter height and weight")
      const heightInMeters = height / 100;
      var bmi: any = weight / (heightInMeters * heightInMeters);

      if (bmi < 19.1) {
        $("#bmiOutput").html(bmi);
        $("#categoryOutput").html('Underweight');
      } else if (bmi >= 19.1 && bmi < 25.8) {
        $("#bmiOutput").html(bmi);
        $("#categoryOutput").html('Normal');
      } else if (bmi >= 25.8 && bmi < 27.3) {
        $("#bmiOutput").html(bmi);
        $("#categoryOutput").html('Slightly Overweight');
      } else if (bmi >= 27.3 && bmi < 32.3) {
        $("#bmiOutput").html(bmi);
        $("#categoryOutput").html('Overweight');
      }
    }
    if (height == "" || weight == "") {
      if (height == "") {
        $(".Err_msg_height").html('Plz Enter Height');
      }
      if (weight == "") {
        $(".Err_msg_weight").html('Plz Enter Weight');
      }
    }
    if (height != "" || weight != "") {
      if (height != "") {
        $(".Err_msg_height").html('');
      }
      if (weight != "") {
        $(".Err_msg_weight").html('');
      }
    }
  }
}
