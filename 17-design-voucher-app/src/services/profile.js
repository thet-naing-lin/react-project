import { getCookie } from "react-use-cookie";

const token = getCookie("login_token");

export const changeProfileName = (newName) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
    method: "POST",
    body: JSON.stringify(newName),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeProfileImage = (formData) => {
  return fetch(
    import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
    {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "multipart/form-data", // ဒီဟာလိုတတ်တယ် img ဆိုရင်
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const changeProfilePassword = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-password", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
