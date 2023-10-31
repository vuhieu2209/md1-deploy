class User {
    id;
    name;
    username;
    email;
    password;
    avatar;

    constructor(id, name, username, email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = "https://firebasestorage.googleapis.com/v0/b/hieu2209-11609.appspot.com/o/images%2F6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg?alt=media&token=f3d0be82-a442-4021-a7d2-23157c4ae6fe&_gl=1*g4ywlm*_ga*MjA1OTQ5MjM2Ni4xNjk4NzY0NjMz*_ga_CW55HF8NVT*MTY5ODc3MDE0OS4yLjEuMTY5ODc3MDE4Ni4yMy4wLjA.";
    }

    setAvatar(avatar){
        this.avatar = avatar
    }
    getAvatar (){
        return this.avatar;
    }
}