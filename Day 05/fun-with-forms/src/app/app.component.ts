import { UsernamesService } from './services/usernames.service';
import { MyValidators } from './models/my-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usernamesService: UsernamesService){}

  form: FormGroup;

  async ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required, 
        Validators.maxLength(10),
        MyValidators.nospace], 
        ctrl => this.usernamesService.availableValidator(ctrl)), 
      description: new FormControl('', [
        Validators.required, 
        MyValidators.wordsCount(4), 
      ]), 
      age: new FormControl(0, [Validators.min(18), Validators.max(100)]), 
      email: new FormControl('', Validators.email)
    }, );

    const user = await this.usernamesService.getUser();
    this.form.reset(user);
  }

  async save() {
    const user: User = this.form.value as User;
    await this.usernamesService.createNewUser(user);

  }


}
