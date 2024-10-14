import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class LaptopsService {
  constructor() {}

  async Fetch_Laptops() {
    try {
      var resp = await axios.get(
        'https://ajira-production.up.railway.app/fetch/laptops'
      );
      return resp.data;
    } catch (err) {
      return err;
    }
  }
}
