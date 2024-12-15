import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private members: string[] = ['Juan', 'Ana', 'Luis'];

  getMembers(): string[] {
    return this.members;
  }

  addMember(name: string) {
    if (!this.members.includes(name)) this.members.push(name);
  }
}
