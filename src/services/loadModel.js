const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const modelUrl = "https://storage.googleapis.com/cancer-mods/model.json";
    try {
        const model = await tf.loadGraphModel(modelUrl);
        console.log("Model loaded successfully");
        return model;
    } catch (error) {
        console.error("Error loading model:", error);
        throw error;
    }
}

// Contoh pemanggilan fungsi
loadModel().then((model) => {
    console.log("Model is ready for inference");
}).catch((error) => {
    console.error("Failed to load the model:", error);
});

module.exports = loadModel;
