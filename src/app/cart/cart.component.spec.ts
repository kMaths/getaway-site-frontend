  
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
/* postStorefrontItemUrl:string = "http://3.131.26.213:8080/spacegeecks/store";
  postStorefrontItem(newStorefront:StorefrontModel):Observable<StorefrontModel>{

    return this.http.post<StorefrontModel>(this.postStorefrontItemUrl, newStorefront).pipe(map((data : StorefrontModel) => {
      return data;
  }), catchError(this.handleError<StorefrontModel>('postStorefrontItem', ))
  )
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
    return of(result as T);
  };
}

} */