import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            username: 'john',
            password: 'sosecure'
        },
        {
            id: 2,
            name: 'Mongo',
            username: 'mongoose',
            password: 'sosecure'
        },
        {
            id: 2,
            name: 'Mongo',
            username: 'mongoose',
            password: 'sosecure'
        },
    ]
}
