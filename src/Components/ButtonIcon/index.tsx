import React from "react"
import { View,
    TouchableOpacity,
    Image,
    Text,
    TouchableOpacityProps

 }from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styled";

interface Props extends TouchableOpacityProps {
    title?: string;
}


export function ButtonIcon({title, ...rest}: Props) {

    return (

        <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
            {title}
            </Text>
        </TouchableOpacity>
    )

}