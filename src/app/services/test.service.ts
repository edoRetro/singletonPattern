import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _store;  

  constructor() { }

  longTimeRequest() {    

    if(this._store == null) {
      this._store = this.emulateFiveSecondsResponse();
    }
    return this._store;

    // return this.emulateFiveSecondsResponse();
  }

  emulateFiveSecondsResponse() {
    return new Promise(resolve =>
      setTimeout(() => resolve({status:"ok", value:"5 secs"}), 5000)
    );
  }
  
}
