export class User {
    constructor(public accountNonExpired: string,
                public accountNonLocked: string,
                public active: number,
                public credentialsNonExpired: boolean,
                public email: string,
                public enabled: boolean,
                public firstName: string,
                public id: number,
                public lastName: string,
                public password: string,
                public username: string,
                public userProfilePath: string
) {}

}
