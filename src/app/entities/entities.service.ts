import { Injectable } from '@angular/core';
import { entities } from './entities-mock';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {

  constructor() {
  }

  get() {
    return entities
      .filter((inn, idx) => entities.findIndex(out => (out.uuid === inn.uuid)) === idx) // remove duplicates
      .filter(entity => entity.rating > 50) // filter out entities with rating < 50
      .sort((a, b) => (a.rating > b.rating ? -1 : 1)) // sort descending
      .map(entity => { entity.rating = Math.round(entity.rating); return entity; }); // round rating to nearest integer
  }
}
