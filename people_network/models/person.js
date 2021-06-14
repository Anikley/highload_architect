/* eslint-disable no-undef */
const person = function (person) {
    this.Id = person.Id;
    this.Login = person.Login;
    this.Password = person.Password;
    this.Email = person.Email;
    this.CreateDate = person.CreateDate;
    this.ModifiedDate = person.ModifiedDate;
    this.DeleteDate = person.DeleteDate;
};

module.exports = person;
