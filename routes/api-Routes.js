const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req,res) => {
    console.log("hello");
    workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.post("/api/workouts", (req, res) => {
    workout.create({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params}, res) => {
    console.log(body);
    
    workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.get("/api/workouts/range", (req,res) => {
    workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;