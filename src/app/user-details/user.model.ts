export class User {
    constructor(public accountNonExpired: string,
                public accountNonLocked: string,
                public active: number,
                public credentialsNonExpired: boolean,
                public email: string,
                public enabled: boolean,
                public first_name: string,
                public id: number,
                public last_name: string,
                public password: string,
                public username: string
) {}

}
