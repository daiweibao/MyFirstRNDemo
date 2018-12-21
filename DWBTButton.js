//创建一个button，并实现点击事件
import React, {Component} from 'react';
//导入组件
import {
    StyleSheet,
    View,
    Button,
    Alert,

} from 'react-native';

//导出
export default class ButtonClass extends Component<Props> {

    //实现button点击事件
    _onPressButton() {
        Alert.alert('点击了button')
    }

    render() {
        return (
            /*设置样式styles，名字：container*/
            <View style={styles.container}>

                <Button

                    // onPress：用户点击此按钮时所调用的处理函数

                    //方式一：button点击事件
                    // onPress={() => {
                    //     Alert.alert("你点击了按钮！");
                    // }}


                    //方式二button点击事件，调用外部方法
                    onPress={this._onPressButton}


                    title="这是一个Button,你可以点击我"//内容
                    color="#841584"//设置颜色
                    disabled={false}//设置为true时此按钮将不可点击,并变成灰色

                />

            </View>

        );
    }


}

//设置大view的样式
const styles = StyleSheet.create({
    container: {
        flex: 0,//默认值为0：none，1：auto
        marginTop:200,
        justifyContent: 'center',//
        alignItems: 'center',
        backgroundColor: 'red',//背景色,白色
        height:100,
    },

});