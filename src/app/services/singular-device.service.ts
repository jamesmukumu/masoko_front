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
        'http://localhost:5767/fetch/singular/device',
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
}
