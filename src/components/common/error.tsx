import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="flex justify-center items-center h-full text-red-500">
            <FaExclamationTriangle className="mr-2" />
            <span>{message}</span>
        </div>
    );
};

export default Error;