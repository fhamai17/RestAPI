const express = require('express')
const movieController = require('../Controllers/MovieController')
const router = require('express').Router()


router.get("/movie/getAllMovies",movieController.getAllMovies)
router.post("/movie/addMovie",movieController.addMovie)
router.get("/movie/getMovie/:id",movieController.getMovie)
router.delete("/movie/deleteMovie/:id",movieController.deleteMovie)
router.post("/movie/updateMovie/:id",movieController.updateMovie)

module.exports = router;