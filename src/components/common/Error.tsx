import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="flex justify-center items-center h-full text-red-500">
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: "5px" }} />
            <span>{message}</span>
        </div>
    );
};

export default Error;