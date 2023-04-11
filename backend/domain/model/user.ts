class User {
    userId: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: Role
}

enum Role {
    ADMIN =  "Admin",
    USER = "User"
}