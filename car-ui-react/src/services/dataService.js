function getSession(){
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    const userName = JSON.parse(sessionStorage.getItem("userName"));
    return {userId, userName};
}

export async function getUser(){
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.userId}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.userName}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders(){
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.userId}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.userName}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}