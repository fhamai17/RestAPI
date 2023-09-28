const con = require("../Config/db");

getAllMovies = function () {
  return new Promise((resolve, reject) => {
      con.connect(function (err) {
          if (err){
            res.status(404).send({
              response_code:404,
              description: error.message
            });
          }else
          {
            con.query("SELECT * FROM Movie", function (err, result, fields) {
              if (err) throw err;
              else {
                  resolve(result);
              }
          });
          }
      });
  })
}

getMovie = function (req,res) {
  return new Promise((resolve, reject) => {
      con.connect(function (err) {
          if (err){
            res.status(404).send({
              response_code:404,
              description: error.message
            });
          }else
          {
            const query = `SELECT * From Movie WHERE movie_id = ?`;
            const dataquery = [req.params.id];


            con.query(query,dataquery, function (err, result) {
              if (err) throw err;
              else {
                  resolve(result);
              }
          });
          }
      });
  })
}

addMovie = function (req, res) {
  let {title,description,release_year,genre,length,rating} = req.body
  return new Promise((resolve, reject) => {
      con.connect(function (err) {
          if (err){
            res.status(404).send({
              response_code:404,
              description: error.message
            });
          }else
          {

            const query = `INSERT INTO Movie(title, description, release_year, genre, length,rating) VALUES (?, ?, ?, ?, ?, ?)`;
            const dataquery = [title,description,release_year,genre,length,rating];


            con.query(query,dataquery, function (err, result) {
              if (err) throw err;
              else {
                  resolve(result);
              }
          });
          }
      });
  })
}


updateMovie = function (req, res) {
  const {title,description,release_year,genre,length,rating} = req.body
  return new Promise((resolve, reject) => {
      con.connect(function (err) {
          if (err){
            res.status(404).send({
              response_code:404,
              description: error.message
            });
          }else
          {

            const query = "UPDATE Movie SET title = ? , description = ? , release_year = ? , genre = ? , length = ? ,rating = ? WHERE movie_id = ?";
            const dataquery = [title,description,release_year,genre,length,rating,req.params.id];

            console.log(req.params)
            con.query(query,dataquery, function (err, result) {
              if (err) throw err;
              else {
                  resolve(result);
              }
          });
          }
      });
  })
}

deleteMovie = function (req, res) {
  return new Promise((resolve, reject) => {
      con.connect(function (err) {
          if (err){
            res.status(404).send({
              response_code:404,
              description: error.message
            });
          }else
          {

            const query = "DELETE From Movie WHERE movie_id = ?";
            const dataquery = [req.params.id];

            console.log(req.params)
            con.query(query,dataquery, function (err, result) {
              if (err) throw err;
              else {
                  resolve(result);
              }
          });
          }
      });
  })
}

module.exports = { getAllMovies : getAllMovies,addMovie:addMovie,updateMovie:updateMovie,deleteMovie:deleteMovie,getMovie:getMovie}