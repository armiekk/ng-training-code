import { Observable } from 'rxjs';

{
    const arr = [1,2,3,4,5,6,7,8,9,10];

    // create
    const from$ = Observable.from(arr);
    from$.subscribe(console.log);
    
    const of$ = Observable.of(arr);
    of$.subscribe(console.log);

    
}