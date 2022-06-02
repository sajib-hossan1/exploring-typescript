var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("user name : ".concat(this.userName, ", age : ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Sajib", 23);
var user2 = new User("Rajib", 27);
user1.display();
user2.display();
