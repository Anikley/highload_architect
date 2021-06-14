const sql = require("../db");
//const personInformation = require("./../models/personInformation");

var personalinformationservice = {};

/**
 * Создать пользовательскую информацию
 */
personalinformationservice.create = (personalInformation, login) => {
  return new Promise(function (resolve) {
    sql.query(
      `SELECT person.Id, personal_information.PersonId FROM person LEFT JOIN personal_information ON person.Id = personal_information.PersonId WHERE person.Login='${login}'`,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          resolve(null);
        }
        var json = JSON.parse(JSON.stringify(res));
        if (json.length >= 1 && json[0].PersonId == null) {
          personalInformation.PersonId = json[0].Id;

          sql.query(
            "INSERT INTO personal_information SET ?",
            personalInformation,
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                resolve(null);
              }

              resolve({ id: res.insertId, ...personalInformation });
            }
          );
        } else {
          var personId = JSON.parse(JSON.stringify(res))[0].PersonId;

          sql.query(
            "UPDATE personal_information SET Name = ?, LastName = ?, Patronymic = ?, Gender = ?, Town = ?, Hobbies = ?, Birth = ?  WHERE PersonId = ?",
            [
              personalInformation.Name,
              personalInformation.LastName,
              personalInformation.Patronymic,
              personalInformation.Gender,
              personalInformation.Town,
              personalInformation.Hobbies,
              personalInformation.Birth,
              personId,
            ],
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                resolve(null);
              }
              personalInformation.Login = login;
              resolve(personalInformation);
            }
          );
        }
      }
    );
  });
};

personalinformationservice.getByLogin = (login, anotherlogin) => {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT personal_information.*, person.Login FROM person INNER JOIN personal_information ON personal_information.PersonId = person.Id WHERE person.Login='${login}'`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
};

personalinformationservice.filterByParams = (searchParams) => {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT person.Login, Name, LastName, PersonId FROM personal_information FORCE INDEX(IDX_personal_information) JOIN person ON person.Id = PersonId WHERE Name LIKE '${searchParams.name}%' AND LastName LIKE '${searchParams.sirname}%' ORDER BY PersonId ASC`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        }
        if (!err) resolve(JSON.parse(JSON.stringify(result)));
      }
    );
  });
};

module.exports = personalinformationservice;
