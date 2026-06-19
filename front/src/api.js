const API_URL =  "https://coral-health-detection-model.onrender.com/predict";

export const predictImage = async (imageFile, modelType) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("model", modelType);

    const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData
    });

    return response.json();
};
