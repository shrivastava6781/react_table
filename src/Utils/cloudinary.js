const UPLOAD_PRESET = "widp5uez";
const CLOUD_NAME = "do0dwcmue";
const API_KEY = "191291845831521"
export const uploadToCloudinary = async(fileData) => {
    const formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);
    formData.append("api_key", API_KEY)
    const response = await fetch("https://api.cloudinary.com/v1_1/c-b084e2df1e980db07a6cc65f4caec1/image/upload", {
      method:"POST",
      body:formData,
     });
     const data = await response.json();
     return data;
}