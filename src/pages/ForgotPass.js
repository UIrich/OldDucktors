import ForgotPass from '../components/Login/ForgotPassword.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ForgotPassword() {
    return (
    <div className="ForgotPassword">
    <ChakraProvider>
        <ForgotPass/>
    </ChakraProvider>
    </div>

    );
}

export default ForgotPassword;