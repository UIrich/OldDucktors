import SignupCard from '../components/Login/Signup.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Signup() {
    return (
    <div className="Register">
    <ChakraProvider>
        <SignupCard/>
    </ChakraProvider>
    </div>

    );
}

export default Signup;