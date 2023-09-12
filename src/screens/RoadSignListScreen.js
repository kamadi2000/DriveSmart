import { roadSignTypeList } from './RoadSignsTypeScreen';

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
