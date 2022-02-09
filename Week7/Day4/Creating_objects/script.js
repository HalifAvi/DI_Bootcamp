

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
let videos = [];

// Bonus: Loop through the array to instantiate those instances.
for(let i=0; i<5; i++){

    videos.push(new Video("Game of Thrones", "Ortal", 2400));
}

console.log(videos)