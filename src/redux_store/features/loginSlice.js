import { createSlice,createAsyncThunk } from  '@reduxjs/toolkit';
import axios from 'axios';

//check user password and username

export const checkLogin = createAsyncThunk(
      'login/checkLogin',
      async (userData, thunkApi) => {
     	var userInfoData={};
	        await  axios.get('https://temp-app-windowshop.herokuapp.com/users?filter=%7B%22where%22%3A%7B%22mobileNo%22%3A%20'+userData.username+'%2C%22password%22%3A%22'+userData.password+'%22%7D%2C%22fields%22%3A%7B%22id%22%3A%20true%2C%22name%22%3A%20true%2C%22mobileNo%22%3A%20true%2C%22pincode%22%3A%20true%2C%22address%22%3A%20true%7D%7D')
			    .then(res => {
			    	if(res.data.length > 0) {
			    		userInfoData.info = res.data[0];
			    		userInfoData.isLoginn = true;
			    	}else{
			    		userInfoData.isLoginn = false;
			    		userInfoData.info = {};
			    	}
			      
			   })
		    return userInfoData;
	  }
);


const loginSlice = createSlice({ 
          name: 'login',
		  initialState: { userinfo: {} , isLogin : false, loading: false },
		  reducers: {
		    // standard reducer logic, with auto-generated action types per reducer
		  },
		  extraReducers: (builder) => {
		    // Add reducers for additional action types here, and handle loading state as needed
		    builder.addCase(checkLogin.fulfilled, (state, action) => {
		      // Add user to the state array
		      state.isLogin = action.payload.isLoginn;
		      state.userinfo = action.payload.info;
		    })
		  },
	});


export default loginSlice.reducer