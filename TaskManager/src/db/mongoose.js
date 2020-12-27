const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
	useNewUrlParser: true,
	useCreateIndex: true,
});

const User = mongoose.model("User", {
	name: {
		type: String,
		required: true,
    },
    email: {
        type: String,
        required: true,
        validate: (value) => {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
	age: {
        type: Number,
        validate: (value) => {
            if(value < 0){
                throw new Error("Age must be positive");
            }
        }
	},
});

const Task = mongoose.model("Task", {
	description: {
		type: String,
	},
	completed: {
        type: Boolean,
	},
});



const me = new User({ name: "Evan", email: "evandaniel160@yahoo.com", age: 14 });

me.save()
	.then(() => {
		console.log(me);
	})
	.catch((err) => {
		console.log("Error:", err);
	});


// const task = new Task({ description: "Eat", completed: true });

// task.save()
// 	.then(() => console.log(task))
// 	.catch((err) => console.log("Error:", err));