export const LoginRequest = (val) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        let data = await res.json();
      

        dispatch({
            type: "LOGIN",
            data: data
        })
    }
}

export const DeletePost = (val) => {
    return async (dispatch) => {
        let res = await fetch(`http://localhost:3000/delete?id=+${val}`)
        let data = await res.json();
        dispatch({
            type: "DELETE",
            data: data
        })
    }
}

