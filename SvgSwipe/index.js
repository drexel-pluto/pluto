import React, { Component } from "react";
import {Svg, Path} from "react-native-svg";
import { StatusBar, Dimensions, Animated } from "react-native";

export default class SvgSwipe extends Component {
    
    render() {
        const { width, height } = Dimensions.get("window");
        const edgeControlDist = 240;
        const pointControlDist = 80;
        var targetPoint = {
            x: width / 2 - 90,
            y: height/ 2
        }
        var path = `
            M${width / 2} 0.0 
            C${width / 2} ${edgeControlDist} ${targetPoint.x} ${targetPoint.y - pointControlDist} ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist} ${width / 2} ${height - edgeControlDist} ${width / 2} ${height}`
        return(
            <Svg height={height} width={width}>
                <Path
                d={path}
                fill="none"
                stroke="red"
                strokeWidth="4"
                />
            </Svg>
        )
    }
}