const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter workout type"  
            },
            name: {
                type: String,
                trim: true,
                required: "Enter workout name"
            },
            duration: {
                type: Number,
                required: "Enter workout duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}
);

// var totalDur;
// workoutSchema.methods.totalDuration = function(){
//     totalDur = totalDur + this.exercises[0].duration;
//     console.log(totalDur);
//     return totalDur
// }

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;