document.addEventListener("DOMContentLoaded", ()=>{
    const shapeSelector = document.getElementById("shapeSelector");
    const inputFields = document.getElementById("inputFields");
    const calculateBtn = document.getElementById("calculateBtn");
    const result = document.getElementById("result");

    const shapes = {
        rectangle: {
            inputs: ["Length", "Width"],
            calculate: (values) => values[0] * values[1],
        },
        circle: {
            inputs: ["Radius"],
            calculate: (values) => Math.PI * Math.pow(values[0], 2),
        },
        triangle: {
            inputs: ["Base", "Height"],
            calculate: (values) => 0.5 * values[0] * values[1],
        },
        square: {
            inputs: ["Side"],
            calculate: (values) => Math.pow(values[0], 2),
        },
        parallelogram: {
            inputs: ["Base", "Height"],
            calculate: (values) => values[0] * values[1],
        },
        ellipse: {
            inputs: ["Major Axis (a)", "Minor Axis (b)"],
            calculate: (values) => Math.PI * values[0] * values[1],
        },
    };


    function updateInputs() {
        const selectedShape = shapeSelector.value;
        if(!selectedShape){
            inputFields.innerHTML = "";
            return;
        }
        const shape = shapes[shapeSelector.value];
        inputFields.innerHTML = shape.inputs
            .map((label, index) => `<input type="number" placeholder="${label}" id="input${index}" required>`)
            .join("");
    }

    shapeSelector.addEventListener("change", updateInputs);

    updateInputs();
})
