// // Add js here.
var videos = document.getElementById("videoplayer");
videos.autoplay=false;
videos.loop=false;

document.getElementById("volume").innerText = document.getElementById("slider").value.toString()+"%";
videos.load();

// pause button
document.getElementById("pause").addEventListener("click",
    function () {
        videos.pause();
    });

// play button
document.getElementById("play").addEventListener("click",
    function () {
        videos.play();
    });

//default speed and variable speeds
var speeds = [0.5, 1, 2];
var default_speed = 1;

document.getElementById("slower").addEventListener("click",
    function () {
        if (default_speed == 0) {
            alert("Video is at slowest speed!");
        }
        else {
            default_speed -= 1;
            videos.playbackRate = speeds[default_speed];
        }
    });

document.getElementById("faster").addEventListener("click",
    function () {
        if (default_speed == 2) {
            alert("Video is at fastest speed!");
        }
        else {
            default_speed += 1;
            videos.playbackRate = speeds[default_speed];
        }
    });

// skip button
document.getElementById("skip").addEventListener("click",
    function () {
        let skipped_time = videos.currentTime + 15;
        if (skipped_time > videos.duration) {
            skipped_time = 0;
        }
        videos.currentTime = skipped_time;
    });

// mute/unmute button
document.getElementById("mute").addEventListener("click",
    function () {
        videos.muted = 1 - videos.muted;
        if (videos.muted) {
            document.getElementById("mute").innerText = "Unmute";
        }
        else {
            document.getElementById("mute").innerText = "Unmute";
        }
    });

// slider
document.getElementById("slider").oninput = function() {
    videos.volume = document.getElementById("slider").value / 100;
    document.getElementById("volume").innerText = document.getElementById("slider").value.toString()+"%";
}