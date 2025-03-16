import { UserCredentials } from "../models/user-credentials.model";
import { User } from "../models/user.model";

export let users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        firstTimeLogin: true
    }
]

export let userCredentials: UserCredentials[] = [
    {
        email: 'john.doe@gmail.com',
        password: '1234'
    }
]
