import { Component } from '@angular/core';

@Component({
  selector: 'app-fuel-cost-calculator',
  templateUrl: './fuel-cost-calculator.component.html',
  styleUrls: ['./fuel-cost-calculator.component.scss']
})
export class FuelCostCalculatorComponent {
   calculate() {
    const mileageInput = $("#mileage");
    const fuelCostInput = $("#fuelCost");
    const distanceInput = $("#distance");

    const mileage = parseFloat(mileageInput.val() as string);
    const fuelCost = parseFloat(fuelCostInput.val() as string);
    const distance = parseFloat(distanceInput.val() as string);

    if (isNaN(mileage) || isNaN(fuelCost) || isNaN(distance)) {
        $(".reasult-main-div").hide();
        $("#Err_msg").html("Plz fill the all data...")
        return;
    }

    const fuelNeeded = distance / mileage;
    const totalFuelCost:any = fuelNeeded * fuelCost;
    $("#result").html(totalFuelCost)
    $(".reasult-main-div").show()
    $("#Err_msg").html("")
}

}
