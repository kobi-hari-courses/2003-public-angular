import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsernamesService {
  private taken = [
    'john', 
    'paul', 
    'johney', 
    'jonjon'
  ]

  public async createNewUser(user: User): Promise<void> {
    console.log(user);
  }

  public async getUser(): Promise<User> {
    return {
      username: 'paul',
      description: 'A very nive person', 
      age: 42, 
      email: 'paul@mcCartney.com'
    }
  }

  public async isAvailable(value: string): Promise<boolean> {
    await this.delay(4000);
    return !this.taken.includes(value.toLowerCase());
  }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }


  public async availableValidator(control: AbstractControl): Promise<null | ValidationErrors> {
    if (!control.value) return null;
    if (typeof(control.value) !== 'string') return null;

    const value = <string>control.value;

    const isAvailable = await this.isAvailable(value);
    if (isAvailable) return null;
  
    return {'usernameFree': true}
  }

  constructor() { }
}
