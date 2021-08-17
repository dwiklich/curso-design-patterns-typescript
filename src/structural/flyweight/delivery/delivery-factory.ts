import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private _locations: DeliveryLocationDictionary = {};

  private createKey(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsicState: DeliveryLocationData,
  ): DeliveryFlyweightProtocol {
    const key = this.createKey(intrinsicState);
    if (key in this._locations) return this._locations[key];
    this._locations[key] = new DeliveryLocation(intrinsicState);
    return this._locations[key];
  }

  get location(): DeliveryLocationDictionary {
    return this._locations;
  }
}
