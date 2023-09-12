import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image } from 'react-native';
import Card from './RoadSignTypeCardComponent';
import Popover from 'react-native-popover-view';
import { WIDTH } from '../../utils/constants';
import { VerticalStack } from './AlignStacks';
import { BodyText, LabelText } from './TextComponent';


const RoadSignPopOver = ({ title, imgPath, description }) => {
    const [showPopover, setShowPopover] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <TouchableOpacity onPress={() => setShowPopover(true)}>
                <Card imgPath={imgPath} title={title} />
            </TouchableOpacity>
            <Popover isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
                <View style={{width : WIDTH * 0.8 , height : WIDTH*1.1 , display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <VerticalStack>
                        <View style={{display:'flex',flex : 1/6 ,width:'100%',paddingHorizontal : 5 ,justifyContent : 'center'}}>
                            <LabelText style={{fontSize : 16 , textAlign : 'center',color : '#21205A'}}>{title}</LabelText>
                        </View>
                        <View style={{display:'flex',flex : 1/3,width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                        <Image source={imgPath} style={{}} />
                        </View>
                        <View style={{display:'flex',flex : 1/2 ,width : '100%',paddingHorizontal : 5}}>
                            <BodyText style={{textAlign : 'center'}}>{description}</BodyText>
                        </View>
                    </VerticalStack>
                    

                </View>
            </Popover>


            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default RoadSignPopOver;