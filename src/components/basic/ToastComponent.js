import  Toast from 'react-native-toast-message'

export const  showErrorToast = (title, description) => {
    console.log({title, description})
    Toast.show({
        type:'error',
        text1: title,
        text2: description
    })
}

export const  showSuccessToast = (title, description) => {
    Toast.show({
        type:'success',
        text1: title,
        text2: description
    })
}