
function setToken(token){
    localStorage.setItem('token', token);
}

function getToken(){
    return localStorage.getItem('token');
}

function removeToken(){
    localStorage.removeItem('token');
}

function isAuthenticated(){
        const token = getToken();

        if(token){
            return true;
        }
        return false;
}

export {setToken, getToken, removeToken, isAuthenticated};
