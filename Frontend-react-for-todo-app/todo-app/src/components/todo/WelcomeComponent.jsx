import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'
import './css/welcome.css'

function WelcomeComponent() {

    const {username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    // function callHelloWorldRestApi(){
    //     console.log('called')
              
    //     retrieveHelloWorldPathVariable('gk', authContext.token)
    //         .then( (response) => successfulResponse(response) )
    //         .catch ( (error) => errorResponse(error) )
    //         .finally ( () => console.log('cleanup') )

    // }

    function successfulResponse(response) {
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="WelcomeComponent">
            <h1>Welcome Back {username} !</h1>
            <div>


                <button className='btn btn-success'>

                <Link to="/todos" style={{ textDecoration: 'none', color: 'white' }}>Manage Todos</Link>

                </button>
                
            </div>  

            {/* <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div> */}
            {/* <div className="text-info">{message}</div> */}
            
        </div>
        
    )
}

export default WelcomeComponent