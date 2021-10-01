import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/operators';
import { IUser } from '../core/interfaces/user.interface';
import { getUsers } from '../store/app.actions';
import { AppState } from '../store/app.reducer';
import { selectCurrentUser, selectSimilarUsers, selectUsers } from '../store/app.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<IUser> = null;
  similarUsers$: Observable<IUser[]> = null;
  isComponentAlive: boolean;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.getUsersIfNecessary();
    this.user$ = this.store.select(selectCurrentUser);
    this.similarUsers$ = this.store.select(selectSimilarUsers);
  }

  getUsersIfNecessary() {
    this.store.select(selectUsers)
    .pipe(
      first()
    )
    .subscribe((users) => {
      if (users === null) {
        this.store.dispatch(getUsers())
      }
    })
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
