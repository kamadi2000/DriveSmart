import Card from "../components/basic/RoadSignTypeCardComponent"
import warningSign from '../assets/images/roadSigns/WarningSign.png'
import { ScrollView, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const roadSignTypeList = [
    {
        id: 1,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Danger Warning Signs',
    },
    {
        id: 2,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Prohibitary Signs'
    },
    {
        id: 3,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Restrictive Signs'
    },
    {
        id: 4,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Mandatory Signs'
    },
    {
        id: 5,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Traffic control Signals'
    },
]

const roadSignsList = [{
    id: 1,
    signTypeId: 1,
    imgPath: require('../assets/images/roadSigns/WarningSign.png'),
    title: 'Danger1',
    description: 'Danger1',
}
]

const RoadSignsScreen = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ paddingTop: 10 }}>
            {roadSignTypeList.map((roadSignType) =>
                <View key={roadSignType.id}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('CourseStack', { screen: 'RoadSignsList', params: { type: roadSignType.id } })}>
                        <Card key={roadSignType.id} imgPath={roadSignType.imgPath} title={roadSignType.title} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('RoadSignsStack',{screen :'RoadSignsList' , params : {type : roadSignType.id}})}>
                    <Card key={roadSignType.id} imgPath={roadSignType.imgPath} title={roadSignType.title} />
                    </TouchableOpacity>
                    
                </View>

            )}

        </ScrollView>


    )
}



export default RoadSignsScreen;