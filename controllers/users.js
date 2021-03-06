'use strict';

const UserModel = require('../models/user');
const sha512 = require('js-sha512').sha512;

class User {
    constructor (user) {
        this.user = user;
    }

    static async create (name, email, password) {
        return new User(await UserModel.new(name, email, sha512(password)));
    }

    toString () {
        return JSON.stringify({
            name: this.user.name,
            email: this.user.email
        });
    }

    toJSON () {
        return {
            id: this.user._doc._id,
            name: this.user._doc.name,
            email: this.user._doc.email
        };
    }
}

module.exports = User;
