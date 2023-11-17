import { HttpClient } from '@angular/common/http';
import { Injectable ,Component} from '@angular/core';
import { OtpService } from '../../otpservice';

@Injectable({
  providedIn: 'root'
})
export class AppRegisterService {

  constructor(private http : HttpClient,private otpService:OtpService) { }
  baseUrl = "http://localhost:3000/";
  
  register(){
   return this.http.get(this.baseUrl + "posts");
  }

  addUser(data:any){
    return this.http.post(this.baseUrl + "posts" , data);
  }
  email: string = 'apexgurut@gmail.com';
  otp: string = '';
  verificationStatus: string = '';


  sendOTP() {
    this.otpService.sendOTP(this.email).subscribe(
      () => {
        this.verificationStatus = 'OTP sent successfully';
      },
      error => {
        console.error(error);
        this.verificationStatus = 'Failed to send OTP';
      }
    );
  }

  verifyOTP() {
    this.otpService.verifyOTP(this.email, this.otp).subscribe(
      () => {
        this.verificationStatus = 'OTP verified successfully. Registration complete!';
      },
      error => {
        console.error(error);
        this.verificationStatus = 'OTP verification failed';
      }
    );
  }

}
