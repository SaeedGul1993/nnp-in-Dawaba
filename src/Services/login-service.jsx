import database from '../Configuration/config';

export const loginApi = (email, passowrd, isSituation, showAlert, handleClick, handleClickError) => {
    return (
        database.auth().signInWithEmailAndPassword(email, passowrd)
            .then(() => {
                handleClick();
                isSituation();

            })
            .catch((error) => {
                handleClickError();
                isSituation();
            })
    )
}
