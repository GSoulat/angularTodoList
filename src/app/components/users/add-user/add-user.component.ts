import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adress } from 'src/app/models/adress.models';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService : UsersService, private router : Router) {}

  ngOnInit(): void {
    this.initUserForm();
  }
  initUserForm() {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastname: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      description: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(15),
      ]),
      dateBirth: this.formBuilder.control('', Validators.required),
      adress: this.formBuilder.group({
        street: this.formBuilder.control('', Validators.required),
        state: this.formBuilder.control('', Validators.required),
        zip: this.formBuilder.control('', Validators.required),
        city: this.formBuilder.control('', Validators.required),
      }),
      aliases: this.formBuilder.array([]),
    });
  }

  onSubmit(): void {


    const dataUser = this.userForm.value;
    console.log(dataUser);
    const alias = dataUser.aliases ? dataUser.aliases : [];
    const adress = new Adress(
      dataUser.street,
      dataUser.city,
      dataUser.state,
      dataUser.zip
    );
    const newUser = new User(
      dataUser.firstname,
      dataUser.lastname,
      dataUser.email,
      adress,
      dataUser.description,
      dataUser.dateBirth,
      alias,
    );
    this.usersService.addUser(newUser);
    this.router.navigate(["users"]);
    console.log(this.userForm.value);
  }

  getAliases(): FormArray{
    return this.userForm.get("aliases") as FormArray;
  }

  addAliases():void{
    this.getAliases().push(this.formBuilder.control("", Validators.required))
  }


}
