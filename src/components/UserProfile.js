import { TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const UserProfile = () => {
    return(
        <View style={{paddingRight : 10}}>
            <TouchableOpacity>
            <Ionicons name="md-person-circle-sharp" size={32} color="black" />
        </TouchableOpacity>

        </View>
        
    )
}

export default UserProfile;