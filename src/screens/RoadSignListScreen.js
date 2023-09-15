import { roadSignTypeList } from './RoadSignsTypeScreen';
import RoadSignPopOver from "../components/basic/RoadSignPopView";
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { BACKGROUND_COLOR } from '../utils/colors';
import { HEIGHT } from '../utils/constants';

export const RoadSignsList = [
    {
        typeId: 1,
        name : "Warning",
        signList:
            [{
                id: 1,
                imgPath: require('../assets/images/roadSigns/warning.png'),
                title: 'Crossing with circular motion',
                description: `is set in n. p. for 50-100 m, outside n. p. for 150-300 m, the sign can be set at a different distance, but the distance is specified in the table. 8.1.1 "Distance to the object".
                When approaching such an intersection, it is recommended to reduce speed to safe limits and to follow the rules of the intersections.`,
            }
            ]

    },
    {
        typeId: 2,
        name : 'Prohibitary',
        signList:
            [{
                id: 1,
                imgPath: require('../assets/images/roadSigns/WarningSign.png'),
                title: 'Danger2',
                description: 'Danger2',
            }
            ]

    },
    {
        typeId: 3,
        name : 'Restrictive',
        signList:
            [{
                id: 1,
                imgPath: require('../assets/images/roadSigns/WarningSign.png'),
                title: 'Danger3',
                description: 'Danger3',
            }
            ]

    },
    {
        typeId: 4,
        name : 'Mandatory',
        signList:
            [{
                id: 1,
                imgPath: require('../assets/images/roadSigns/WarningSign.png'),
                title: 'Danger4',
                description: 'Danger4',
            }
            ]

    },
    {
        typeId: 5,
        name : 'Traffic control',
        signList:
            [{
                id: 1,
                imgPath: require('../assets/images/roadSigns/WarningSign.png'),
                title: 'Danger5',
                description: 'Danger5',
            }
            ]

    },

]

const RoadSignsListScreen = ({route , navigation}) => {
    const { type } = route.params
    console.log({type})

    useEffect(() => {    
        navigation.setOptions({ title: RoadSignsList.find(item => item.typeId == type).name })
    }, [type])
    const signList = RoadSignsList.find(item => item.typeId == type).signList
    console.log(signList)
    return(
        <ScrollView contentContainerStyle={{backgroundColor : BACKGROUND_COLOR , height : HEIGHT}}>
            <View style={{ }}>
            {signList.map((sign) => 
               <RoadSignPopOver key={sign.id} imgPath={sign.imgPath} title={sign.title} description={sign.description}/>
                

            )}

           
        {/* <RoadSignsListScreen/> */}
        </View>
        </ScrollView>
    )
}

export default RoadSignsListScreen;
