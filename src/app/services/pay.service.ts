import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PayService {
  constructor() {}

  async initatePay(amount: string) {
    var pushAmount = +amount;
    var payload = {
      amount: pushAmount,
    };
    try {
      var resp = await axios.post(
        'https://ajira-production.up.railway.app/go/to/pay',
        payload
      );
      var { message, url } = resp.data;
      if (message === 'Payment initiated') {
        window.location.href = url;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
