const movieModel = require("../Models/Movie");

function index(req,res){
    const movie = "Movie List"
    res.send(movie)
}

getAllMovies = async function (req, res) {
    const result = await movieModel.getAllMovies();
    if(result){
        res.status(200).json({
            response_code:200,
            response_message: `Get all movies successful`,
            data: result
        })
    }
    else{
        res.status(500).json({
            response_code:500,
            message: `Internal Error`,
        })
    }
}

getMovie = async function (req, res) {
    const result = await movieModel.getMovie(req,res);
    if(result){
        res.status(200).json({
            response_code:200,
            response_message: `Get movie successful`,
            data: result
        })
    }
    else{
        res.status(500).json({
            response_code:500,
            message: `Internal Error`,
        })
    }
}


addMovie = async function (req, res) {
    if (!req.body.title) {
        res.status(200).send({
          response_code: "400",
          response_message: "Title cannot be Null.",
        });
    }

    else  if (!req.body.description) {
        res.status(200).send({
          response_code: "400",
          response_message: "Description cannot be Null.",
        });
    }


    else if (!req.body.release_year) {
        res.status(200).send({
          response_code: "400",
          response_message: "Release Year cannot be Null.",
        });
    }


    else if (!req.body.genre) {
        res.status(200).send({
          response_code: "400",
          response_message: "Genre cannot be Null.",
        });
    }



    else if (!req.body.length) {
        res.status(200).send({
          response_code: "400",
          response_message: "Length cannot be Null.",
        });
    }


    else if (!req.body.rating) {
        res.status(200).send({
          response_code: "400",
          response_message: "Rating cannot be Null.",
        });
    }
    else{

        const result = await movieModel.addMovie(req, res);
        if(result){
            res.status(200).json({
                response_code:200,
                response_message: `Add movie successful`,
                data: result
            })
        }
        else{
            res.status(500).json({
                response_code:500,
                message: `Internal Error`,
            })
        }
    }

   
}

updateMovie = async function (req, res) {
    if (!req.body.title) {
        res.status(200).send({
          response_code: "400",
          response_message: "Title cannot be Null.",
        });
    }

    else if (!req.body.description) {
        res.status(200).send({
          response_code: "400",
          response_message: "Description cannot be Null.",
        });
    }


    else if (!req.body.release_year) {
        res.status(200).send({
          response_code: "400",
          response_message: "Release Year cannot be Null.",
        });
    }


    else if (!req.body.genre) {
        res.status(200).send({
          response_code: "400",
          response_message: "Genre cannot be Null.",
        });
    }



    else if (!req.body.length) {
        res.status(200).send({
          response_code: "400",
          response_message: "Length cannot be Null.",
        });
    }


    else if (!req.body.rating) {
        res.status(200).send({
          response_code: "400",
          response_message: "Rating cannot be Null.",
        });
    }
    else{

        const result = await movieModel.updateMovie(req, res);
        if(result){
            res.status(200).json({
                response_code:200,
                response_message: `update movie successful`,
                data: result
            })
        }
        else{
            res.status(500).json({
                response_code:500,
                message: `Internal Error`,
            })
        }
    }

   
}



deleteMovie = async function (req, res) {
    if (!req.params.id) {
        res.status(200).send({
          response_code: "400",
          response_message: "Movie ID cannot be Null.",
        });
    }

    else{

        const result = await movieModel.deleteMovie(req, res);
        if(result){
            res.status(200).json({
                response_code:200,
                response_message: `Delete movie successful`,
                data: result
            })
        }
        else{
            res.status(500).json({
                response_code:500,
                message: `Internal Error`,
            })
        }
    }

   
}

module.exports = { getAllMovies:getAllMovies,getMovie:getMovie,addMovie : addMovie,updateMovie:updateMovie,deleteMovie:deleteMovie}