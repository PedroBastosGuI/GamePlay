import React from "react"
import { View,
    TouchableOpacity,
    Image,
    Text

 }from "react-native";


import DiscordImg from "../../assets/discord.png";
import { styles } from "./styled";

interface Props {
    title?: string;
}


export function ButtonIcon({title}: Props) {

    return (

        <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
            {title}
            </Text>
        </TouchableOpacity>
    )

}