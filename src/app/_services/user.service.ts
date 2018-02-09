import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://18.219.132.120/api/users');
    }

    getById(id: number) {
        return this.http.get('http://18.219.132.120/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('http://18.219.132.120/api/register', user);
    }

    update(user: User) {
        return this.http.put('http://18.219.132.120/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://18.219.132.120/api/users/' + id);
    }
}
