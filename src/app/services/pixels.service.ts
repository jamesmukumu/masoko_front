import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PixelsService {
  constructor() {}
  async Fetch_Phone_Brands(PhoneSlug: string) {
    try {
      var resp = await axios.get(
        'https://ajira-production.up.railway.app/get/phones/brandwise',
        {
          params: {
            brandSlug: PhoneSlug,
          },
        }
      );
      return resp.data;
    } catch (err) {
      return err;
    }
  }
}
