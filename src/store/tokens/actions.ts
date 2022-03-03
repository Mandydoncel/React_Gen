export type Action = { type: "ADD_Token"; payload: string };

export const addToken = (token: string): Action => ({
    type: "ADD_Token",
    payload: token,
});

/*function addToken2(token: string): Action{
    return (
        {
            type: "ADD_Token",
            payload: token
        }
    )
}     outra forma de pedir o token*/