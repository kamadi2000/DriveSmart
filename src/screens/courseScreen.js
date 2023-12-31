import { View, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import Heading from '../components/Heading';
import axios from 'axios';
import { BACKEND_URL } from '../utils/constants';
import { selectUserToken } from "../redux/userSlice";
import { useSelector } from 'react-redux';

function courseScreen(){
  const [headings,setHeadings] = useState([])
  const token = useSelector(selectUserToken)

  // useEffect(()=>{
  //   // fetch from database
  //   const data = [
  //     {
  //       id:"1",
  //       name: "Overview",
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
  //     },
  //     {
  //       id:"2",
  //       name: "Who can apply for driving license?",
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: false, status: false, quizId:'quizId'}
  //     },
  //     {
  //       id:"3",
  //       name: "What are the ways to apply License?",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
  //     },
  //     {
  //       id:"4",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
  //     },
  //     {
        
  //       id:"5",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
        
  //     },
  //     {
        
  //       id:"6",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
        
  //     },
  //     {
        
  //       id:"7",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
        
  //     },
  //     {
        
  //       id:"8",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
  //     },
  //     {
        
  //       id:"9",
  //       name: "Sample heading",  
  //       video:{isPremium: true, status: true, videoId:"videoId"},
  //       quiz:{isPremium: true, status: true, quizId:'quizId'}
  //     }
  //   ]
  //   // update headings
  //   setHeadings(data)
    
  // },[])
  const axiosConfig = {
    headers: {
      'x-access-token': token,
    },
  };

  useEffect(()=>{
   
    axios.get(`${BACKEND_URL}/material/topics`,axiosConfig)
        .then(response => { 
            // Handle the successful response here

    
            console.log(response.data)

            setHeadings(response.data)
            
        })
        .catch(error => {
            console.log("error")    
        })
  },[])



  return (
    <View style={styles.courseContainer}>
            <FlatList 
              style={{flex:1,marginBottom:50, width:'100%'}}
              data={headings}
              keyExtractor={(item)=> item._id}
              renderItem = {(data)=> <Heading  item={data.item} />}
            />
    </View>
  )
}

export default courseScreen

const styles = StyleSheet.create({
  courseContainer:{
    backgroundColor: BACKGROUND_COLOR,
    flex:1,
    paddingTop:30,
    justifyContent:'center',
    alignItems:'center'
  }
})