import { Injectable } from '@angular/core';
import axios from 'axios';
import Cookies from 'js-cookie';

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
        'https://masoko-production.up.railway.app/go/to/pay',
        payload
      );
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }

  async validatePay() {
    var token = Cookies.get('payment');
    try {
      var resp = await axios.post(
        'https://masoko-production.up.railway.app/validate/payment',
        {},
        {
          headers: { payment: `Basic ${token}` },
        }
      );
      return resp.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
