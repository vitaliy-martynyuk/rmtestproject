import { Key } from 'react';

export interface Entity {
    id: Key;
    name: string;
    email: string;
    username: string;
    phone: string;
}

export interface Data {
    data: Array<Entity> | undefined;
    isLoading?: boolean;
    isError?: boolean;
    postCharacter?: (data: Entity) => Promise<any>;
    createMutation?: () => void;
}
