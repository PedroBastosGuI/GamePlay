import {StyleSheet} from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
     user:{
        flexDirection: 'row'
        
     },
     username:{
        fontFamily: theme.fonts.title700,
        fontSize:24,
        color: theme.colors.heading,
     },
     massage:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,


     },
     greeting:{
         fontFamily: theme.fonts.title500,
         fontSize:24,
         color: theme.colors.heading,
         marginRight: 6,
     }

})