import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SingularDeviceService {
  constructor() {}

  async Fetch_Singular_Device(urlPath: string) {
    try {
      var resp = await axios.get(
        'https://techwave.up.railway.app/fetch/singular/device',
        {
          params: {
            slug: urlPath,
          },
        }
      );
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }

  async FilterDevice(slug: string) {
    try {
      var resp = await axios.get(
        'https://techwave.up.railway.app/filter/device',
        {
          params: { device: slug },
        }
      );
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
}
