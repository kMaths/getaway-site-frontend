import { User } from '../services/user';

export interface Artwork {
    id: number;
    photo: string;
    credit: string;
    status: string;
    user: User;
}