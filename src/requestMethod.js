import axios from "axios";

const BASE_URL = "http://localhost:5000/backend/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2JmMjExZGQ0N2FiNjUxMjEzNGNiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzQ4MDYzOCwiZXhwIjoxNzAzNzM5ODM4fQ.qr7YgTQOVrFsEwy61WzaXhmov3DVnmZUS-XFLdiuH3Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export default userRequest;
