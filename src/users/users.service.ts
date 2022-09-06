import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    username: string;
    password: string;
    name: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        { id: 1, name: 'minh', password: 'minhvip', username: 'minh' },
        { id: 2, name: 'minh', password: 'minhvip2', username: 'minh2' },
    ]
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
