import axios from 'axios'

export const apiClient = axios.create(
    {
        //baseURL: 'http://localhost:5000' //#CHANGE
        baseURL: 'http://rest-api-full-stack-env.eba-i2g4prj2.ap-south-1.elasticbeanstalk.com/'
    }
);

/* For Best Practices https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables*/
