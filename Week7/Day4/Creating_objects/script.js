

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video {

    constructor(title, uploader, time){

        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }


// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

    watch() {

        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}


// Instantiate a new Video instance and call the watch() method.
const video1 = new Video("Money Heist", "Avi", 1200);
video1.watch();

// Instantiate a second Video instance with different values.
const video2 = new Video("Game of Thrones", "Ortal", 2400);

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
let videos = [new Video("video1", "ortal", 2400),
              new Video("video2", "avi", 2400),
              new Video("video3", "shlomi", 2400),
              new Video("video4", "ran", 2400),
              new Video("video5", "hana", 2400),
];

// Bonus: Loop through the array to instantiate those instances.
let arrayOfVideoInstances = [

    ["video1", "ortal", 2400],
    ["video2", "avi", 2400],
    ["video3", "shlomi", 2400],
    ["video4", "ran", 2400],
    ["video5", "hana", 2400],
].map( ([title, uploader, time]) => new Video(title, uploader, time) );

console.log(arrayOfVideoInstances);
