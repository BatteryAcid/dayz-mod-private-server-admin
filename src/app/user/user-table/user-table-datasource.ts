import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { UserService } from '../../user/service/user.service';
import { User } from '../../user/model/user';

/**
 * Data source for the UserTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserTableDataSource extends DataSource<User> {

   constructor(private paginator: MatPaginator, private sort: MatSort, private userService: UserService) {
      super();
   }

   /**
    * Connect this data source to the table. The table will only update when
    * the returned stream emits new items.
    * @returns A stream of the items to be rendered.
    */
   connect(): Observable<User[]> {
      return this.userService.getPlayers();
   }

   /**
    *  Called when the table is being destroyed. Use this function, to clean up
    * any open connections or free any held resources that were set up during connect.
    */
   disconnect() { }
}
