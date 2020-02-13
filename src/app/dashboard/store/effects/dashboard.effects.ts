import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { CatService } from '../../services/cat.service';
import { DashoboardActionTypes } from '../actions/dashboard.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CatPayload } from '../models/cat.model';


export class DashboardEffects {
  public loadCat$ = createEffect(() => this.actions$.pipe(
    ofType(DashoboardActionTypes.GET_CAT_ACTION),
    mergeMap(() => this.catService.getCat()
      .pipe(
        map((cat: CatPayload) => {
          return { type: DashoboardActionTypes.GET_CAT_SUCCESS_ACTION, payload: cat[0].url };
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private catService: CatService
  ) { }
}
