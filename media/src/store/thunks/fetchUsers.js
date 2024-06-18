import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY!!
  await pause(1000);

  return response.data;
});

// AsyncThunk automatically creates 3 action types:
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

//FOR DEV ONLY -- good for testing loading state.
//This allows to avoid using throttling network for testing.
//Throttling works, but can become very tedious when everything loads slowly.
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
