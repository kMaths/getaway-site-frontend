import { User } from '../Services/user';

export interface Artwork {
    id: number;
    photo: string;
    credit: string;
    status: string;
    user: User;
}