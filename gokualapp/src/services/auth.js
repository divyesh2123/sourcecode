import axios from "axios";
import swal from "sweetalert";

const authToken = sessionStorage.getItem("auth");
const user = JSON.parse(sessionStorage.getItem("user"));
const author = authToken?.slice(0, -1).slice(1);


const baseURL = `${process.env.REACT_APP_LOGIN_API_URL}/api`;
const authFetch = axios.create( {

     
})


  authFetch.interceptors.request.use(
    (request) => {

     if(!request.url.includes("login"))
     {
     
      request.headers['Authorization'] = `bearer ${author}`
     }
      request.headers['Accept'] = 'application/json';
      request.headers['Content-Type'] = 'application/json';
      request.headers['X-Custom-Header'] = 'header value';
    
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }

      if (error.response.status === 504) {

        swal({
          title: "Session Expired",
          text: "Please login again to start new session. Sorry for the inconvinience.",
          icon: "warning",
          dangerMode: true,
        })
        
        
        sessionStorage.clear();
        localStorage.clear();

        // navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  

export default authFetch;