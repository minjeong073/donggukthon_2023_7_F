import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const DeletePhoto = async (photo_id, photoInfo) => {
  try {
    const response = await axios.put(
      `${API_URL}/photo/delete/${photo_id}`,
      photoInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default DeletePhoto;
