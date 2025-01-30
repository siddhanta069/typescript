interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateUserProps = Pick<User, 'name' | 'age' | 'password'>;

function UpdateUser( userdata:UpdateUserProps) {
    console.log(userdata.name, userdata.age, userdata.password);
}

let user:User = {
    id: 19,
    name: 'John',
    age: 30,
    password: 'password',
    email: 'hhaho@gmail.com',
}

UpdateUser(user);  