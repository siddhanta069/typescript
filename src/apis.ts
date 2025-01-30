interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateUserProps = Pick<User, 'name' | 'age' | 'password'>;
type UpdateUserPartial = Partial<UpdateUserProps>;

function UpdateUser( userdata:UpdateUserPartial ) {
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


//Readonly
type User1 = {
    name: string;
    age: number;
}

const user1: Readonly<User1> = {
    name: 'John',
    age: 30
}

user1.name = 'Doe'; // Error: Cannot assign to 'name' because it is a read-only property.