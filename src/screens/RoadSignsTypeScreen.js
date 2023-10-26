import Card from "../components/basic/RoadSignTypeCardComponent"
import warningSign from '../assets/images/roadSigns/WarningSign.png'
import { ScrollView, View, TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { BACKGROUND_COLOR } from "../utils/colors"
import { HEIGHT } from "../utils/constants"

export const roadSignTypeList = [
    {
        id: 1,
        imgPath: require('../assets/images/roadSigns/WarningSign.png'),
        title: 'Danger Warning Signs',
    },
    {
        id: 2,
        imgPath: require('../assets/images/roadSigns/p.png'),
        title: 'Prohibitary Signs'
    },
    {
        id: 3,
        imgPath: require('../assets/images/roadSigns/M.png'),
        title: 'Restrictive Signs'
    },
    {
        id: 4,
        imgPath: require('../assets/images/roadSigns/s.png'),
        title: 'Mandatory Signs'
    },
    {
        id: 5,
        imgPath: require('../assets/images/roadSigns/o.png'),
        title: 'Traffic control Signals'
    },
]

// const roadSignsList = [{
//     id: 1,
//     signTypeId: 1,
//     imgPath: require('../assets/images/roadSigns/WarningSign.png'),
//     title: 'Danger1',
//     description: 'Danger1',
// }
// ]

const RoadSignsScreen = () => {
    console.log({ roadSignTypeList })
    const navigation = useNavigation()
    return (
        <ScrollView 
            contentContainerStyle={{
                    display : 'flex',
                    alignItems : 'center',
                    backgroundColor : BACKGROUND_COLOR,
                    height : HEIGHT ,
                    flex : 1,
                    paddingTop : 10
                }}>
            {roadSignTypeList[0] && roadSignTypeList.map((roadSignType) => {
                console.log({ roadSignType })
                return (
                    <View key={roadSignType.id}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('CourseStack', { screen: 'RoadSignsList', params: { type: roadSignType.id } })}>
                        <Card key={roadSignType.id} imgPath={roadSignType.imgPath} title={roadSignType.title} />
                    </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('RoadSignsList', { type: roadSignType.id } )}>
                            <Card key={roadSignType.id} imgPath={roadSignType.imgPath} title={roadSignType.title} />
                        </TouchableOpacity>

                    </View>
                )
            }

            )}

        </ScrollView>


    )
}



export default RoadSignsScreen;