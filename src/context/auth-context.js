import React from 'react';

const authContext = React.createContext({
    athenticated: false, 
    login: () => {}
});

export default authContext;