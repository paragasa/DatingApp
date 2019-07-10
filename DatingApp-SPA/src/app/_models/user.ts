import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    photoUrl: string;
    lastActive: Date;
    city: string;
    country: string;
    interests?: string;
    introduction: string;
    lookingFor?: string;
    photo?: Photo[];
}
