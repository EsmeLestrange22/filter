//no preload function is required, as there are no ASSETS

function setup() {
    canvas = createCanvas(600, 450)
    canvas.position(455, 250);

    video = createCapture(VIDEO);
    video.size(600, 450)
    video.hide();
    tintC = "";
}

function draw() {
    image(video, 0, 0, 600, 450)
    tint(tintC);
}

function apply() {
    tintC = document.getElementById("i_color").value;
}

function savePic() {
    save("filtered_pic.png");
}