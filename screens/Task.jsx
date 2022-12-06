import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";
import { Entypo } from '@expo/vector-icons';

export const Task = (props) =>{
    return(
        <View style={styles.item}>
            <Entypo name="minus" size={24} color="black" />
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.limit}>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            
        </View>
    )
}