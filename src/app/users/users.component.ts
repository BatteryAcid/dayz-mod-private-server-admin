import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
import { Users } from './users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	players: Users[];
  	constructor(private usersService: UsersService) { }

  	ngOnInit() {
  		this.getPlayers();
  	}

  	getPlayers(): void {
    	this.usersService.getPlayers()
    	.subscribe(players => this.players = players);
  	}

}
