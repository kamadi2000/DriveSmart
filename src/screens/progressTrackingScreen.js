import React, { useEffect, useState } from 'react'
import {BarChart} from "react-native-chart-kit";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList,
  } from 'react-native';
import Heading from '../components/Heading';
import { ProgressBar, Colors } from 'react-native-paper';
import { PRIMARY_COLOR } from '../utils/colors';

function ProgressTrackingScreen() {

//     const [headings,setHeadings] = useState([])
//   useEffect(()=>{
//     // fetch from database
//     const data = [
//       {
//         id:"1",
//         name: "Overview",
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
//       },
//       {
//         id:"2",
//         name: "Who can apply for driving license?",
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: false, status: false, quizId:'quizId'}
//       },
//       {
//         id:"3",
//         name: "What are the ways to apply License?",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
//       },
//       {
//         id:"4",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
//       },
//       {
        
//         id:"5",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
        
//       },
//       {
        
//         id:"6",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
        
//       },
//       {
        
//         id:"7",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
        
//       },
//       {
        
//         id:"8",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
//       },
//       {
        
//         id:"9",
//         name: "Sample heading",  
//         video:{isPremium: true, status: true, videoId:"videoId"},
//         quiz:{isPremium: true, status: true, quizId:'quizId'}
//       }
//     ]
//     // update headings
//     setHeadings(data)
    
//   },[])

    const MyBarChart = () => {
        return (
          <>
            <Text style={styles.header}>Quizzes Marks</Text>
            <BarChart
              data={{
                labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6'],
                datasets: [
                  {
                    data: [80, 45, 20, 80, 99, 43],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={280}
              yAxisLabel={''}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </>
        );
      };

    return (
        <SafeAreaView style={{flex: 1}}>
            
            <View style={styles.container}>
                <View>
                    <MyBarChart/>
                </View>
            </View>
           
                
            {/* <View style={styles.courseContainer}>
                <Text style={styles.courseHeader}>Course Progress</Text>
                
                    <FlatList 
                        style={{flex:1,marginBottom:50, width:'100%'}}
                        data={headings}
                        keyExtractor={(item)=> item.id}
                        renderItem = {(data)=> <Heading  item={data.item} />}
                    />
                    
                </View> */}
        </SafeAreaView>
    );
}

export default ProgressTrackingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      backgroundColor: '#EDF3F4',
    },
    header: {
      textAlign: 'center',
      fontSize: 24,
      padding: 16,
      marginTop: 10,
    },
    // courseContainer:{
    //     backgroundColor: '#EDF3F4',
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    //   },
    //   courseHeader:{
    //     textAlign: 'center',
    //     fontSize: 18,
    //    marginBottom:16,
    //   }
  });