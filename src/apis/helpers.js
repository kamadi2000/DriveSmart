import { showErrorToast } from "../components/basic/ToastComponent"

const responseHandler = (onSuccess, onError = () => {}, shouldNotify=true) => {

    return (res) => {
        if(res.success){
            onSuccess(res)
        }
        else{
            if(shouldNotify){
                //notification
            }
            // console.log({error: res.error})
            showErrorToast('error',res.error)
            onError(res)
        }
    }
}

export default responseHandler;