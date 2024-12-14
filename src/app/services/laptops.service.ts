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
        'https://techwave.up.railway.app/get/phones/brandwise?brandSlug=hp'
      );
      return resp.data;
    } catch (err) {
      return err;
    }
  }
  //
}
