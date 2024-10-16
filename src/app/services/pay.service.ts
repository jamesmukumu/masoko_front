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
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
}
