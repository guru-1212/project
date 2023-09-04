import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-substraction-game',
  templateUrl: './substraction-game.component.html',
  styleUrls: ['./substraction-game.component.scss']
})
export class SubstractionGameComponent {
  userdetails: any;
  Answer: any;
  Wrong_ans: number = 0;
  Right_ans: number = 0;
  // Wrong_target_count:any = 10;
  // Right_target_count:any = 10;
  first_val: any
  wrong_counts: any
  counting_val:any

  constructor(public formBulider: FormBuilder) {

  }

  ngOnInit() {
    this.userdetails = this.formBulider.group({
      userAnswer: ['', [Validators.required, Validators.min(0)]]
    });
  }
  countingStart() {
    for (let counting_val = 300; counting_val >= 0; counting_val--) {
      setTimeout(function () {
        var Timer_counting: any = document.querySelector(".Timer_counting");
        Timer_counting.innerHTML =`Game Started : ${counting_val} Sec`;
      }, counting_val * 1000);
    }
   
  }

  // Time_out(){
  // if(this.countingval==300){
  //   alert("You lost tha game !")
  // }
  // }

  // Time_over() {
  //   setInterval(myTimer, 1000);

  //   function myTimer() {
  //     const d = new Date();
  //     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  //   }
  // }
  gameStart() {
    $("#startBtn").hide();
    $(".random-number-main-div ").show();
    if ($("#Easy").hasClass("selected")) {
      $("#Easy").addClass("selected");
      $(".Start-btn").addClass(".level_selected");
      $(".before_start").addClass("after_start");
      $(".lvl_btn").addClass("after_start_lvl_btn_style");
  
      let first_val_generated = Math.floor(Math.random() * 10) + 1;
      var first_val: any = document.querySelector(".random-first-number");
      first_val.innerHTML = first_val_generated;
  
      let second_val_generated = Math.floor(Math.random() * 10) + 1;
      var second_val: any = document.querySelector(".random-second-number");
      second_val.innerHTML = second_val_generated;
  
      this.Answer = first_val_generated - second_val_generated;
    }
    if ($("#Medium").hasClass("selected")) {
      $(".Start-btn").addClass(".level_selected");
      $(".before_start").addClass("after_start");
      $(".lvl_btn").addClass("after_start_lvl_btn_style");
  
      let first_val_generated = Math.floor(Math.random() * 91) + 10;
      var first_val: any = document.querySelector(".random-first-number");
      first_val.innerHTML = first_val_generated;
  
      let second_val_generated = Math.floor(Math.random() * 91) + 10;
      var second_val: any = document.querySelector(".random-second-number");
      second_val.innerHTML = second_val_generated;
  
      this.Answer = first_val_generated  -second_val_generated;
    }
    if ($("#Hard").hasClass("selected")) {
      $(".Start-btn").addClass(".level_selected");
      $(".before_start").addClass("after_start");
      $(".lvl_btn").addClass("after_start_lvl_btn_style");
      let first_val_generated = Math.floor(Math.random() * 901) + 100;
      var first_val: any = document.querySelector(".random-first-number");
      first_val.innerHTML = first_val_generated;
  
      let second_val_generated = Math.floor(Math.random() * 901) + 100;
      var second_val: any = document.querySelector(".random-second-number");
      second_val.innerHTML = second_val_generated;
  
      this.Answer = first_val_generated + second_val_generated;
    }
  }

  count() {
    var answer_from_user: any = document.querySelector(".user-inter-answer");
    var alert_box: any = document.querySelector(".modal");
    var Err_msg: any = document.querySelector("#Err-msg");
    Err_msg.innerHTML = "";
    if (answer_from_user.value == "") {
      // alert("Plz Give answer then submit !");
      var Err_msg: any = document.querySelector("#Err-msg");
      Err_msg.innerHTML = "Plz Give Answer.";
      return;

    }
    else {
      var wrong_counts: any = document.querySelector('.wrong_count_show');
      var Right_counts: any = document.querySelector('.right_count_show');
      var main_ans = answer_from_user.value;
      if (this.Answer == main_ans) {
        ++this.Right_ans;
        Right_counts.innerText = this.Right_ans;
        $('#rightimageContainer').fadeIn();
        setTimeout(function() {
          $('#rightimageContainer').fadeOut();
        }, 2000);
      } else {
        ++this.Wrong_ans;
        wrong_counts.innerText = this.Wrong_ans;
        $('#wrongimageContainer').fadeIn();
        setTimeout(function() {
          $('#wrongimageContainer').fadeOut();
        }, 2000);
      }
    }
    if(this.Wrong_ans==1){
      $(".Wrong-count-progressbar").css("width","10%")
    }
    if(this.Wrong_ans==2){
      $(".Wrong-count-progressbar").css("width","20%")
    }
    if(this.Wrong_ans==3){
      $(".Wrong-count-progressbar").css("width","30%")
    }
    if(this.Wrong_ans==4){
      $(".Wrong-count-progressbar").css("width","40%")
    }
    if(this.Wrong_ans==5){
      $(".Wrong-count-progressbar").css("width","50%")
    }
    if(this.Wrong_ans==6){
      $(".Wrong-count-progressbar").css("width","60%")
    }
    if(this.Wrong_ans==7){
      $(".Wrong-count-progressbar").css("width","70%")
    }
    if(this.Wrong_ans==8){
      $(".Wrong-count-progressbar").css("width","80%")
    }
    if(this.Wrong_ans==9){
      $(".Wrong-count-progressbar").css("width","90%")
    }
    if(this.Right_ans==1){
      $(".Right-count-progressbar").css("width","10%")
    }
    if(this.Right_ans==2){
      $(".Right-count-progressbar").css("width","20%")
    }
    if(this.Right_ans==3){
      $(".Right-count-progressbar").css("width","30%")
    }
    if(this.Right_ans==4){
      $(".Right-count-progressbar").css("width","40%")
    }
    if(this.Right_ans==5){
      $(".Right-count-progressbar").css("width","50%")
    }
    if(this.Right_ans==6){
      $(".Right-count-progressbar").css("width","60%")
    }
    if(this.Right_ans==7){
      $(".Right-count-progressbar").css("width","70%")
    }
    if(this.Right_ans==8){
      $(".Right-count-progressbar").css("width","80%")
    }
    if(this.Right_ans==9){
      $(".Right-count-progressbar").css("width","90%")
      // $('#winning_animation').fadeIn();
      // setTimeout(function() {
      //   $('#winning_animation').fadeOut();
      // }, 3000);
    }
    if (this.Wrong_ans == 10) {
      document.location.reload();
      this.Wrong_ans = 0;
      alert("You lost the game plz try again !");
      $(".Wrong-count-progressbar").css("width","10%")
     
    }
    if (this.Right_ans == 10) {
      document.location.reload();
      alert("Congratulation you won !");
      alert("Play once again !");
      this.Right_ans = 0;
      $(".Right-count-progressbar").css("width","100%")
      
    }

    this.gameStart();
  }
  Next() {
    var answer_from_user: any = document.querySelector(".user-inter-answer");
    answer_from_user.value = "";
  }
  Easy(){
    $("#Easy").addClass("selected");
    $(".before_start").addClass("after_start");
    $(".lvl_btn").addClass("after_start_lvl_btn_style");
    $(".Start-btn-main").addClass("level_selected");
    $(".select-game-level-text").addClass("after_select_level");
  }
  Medium(){
    $("#Medium").addClass("selected");
    $(".before_start").addClass("after_start");
    $(".lvl_btn").addClass("after_start_lvl_btn_style");
    $(".Start-btn-main").addClass("level_selected");
    $(".select-game-level-text").addClass("after_select_level");
  }
  Hard(){
    $("#Hard").addClass("selected");
    $(".before_start").addClass("after_start");
    $(".lvl_btn").addClass("after_start_lvl_btn_style");
    $(".Start-btn-main").addClass("level_selected");
    $(".select-game-level-text").addClass("after_select_level");
  }
}
