import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription , interval} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  secondesObsSub : Subscription;
  secondes: unknown;

  constructor() { }
  ngOnDestroy(): void {
    this.secondesObsSub.unsubscribe;

  }

  ngOnInit(): void {


    const secondesObs = interval(1000);

      this.secondesObsSub=secondesObs.subscribe(
      (value) => {
        this.secondes = value;
        console.log(value);
      });
}

}

