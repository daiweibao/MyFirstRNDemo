import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class touch extends Component {

    static defaultProps = { // es6 -不可变值
        age: 18,
        sex: '女'
    };

    state = {  // es5-可改变
        name: '李四',
        description: '是个好人'
    }

    render() {
        return (
            <View ref="RootView" style={styles.container}>
                <TouchableOpacity
                    activeOpacity = {0.5}
                    onPress = {()=>this.onPressEvent()}
                    onPressIn = {()=>this.onPressInEvent('按下,未抬起')}
                    onPressOut = {()=>this.onPressOutEvent('按下,抬起后')}
                    onLongPress = {()=>this.longPressEvent()}

                >
                    <Text style={styles.welcome}>
                        点击更改文字
                    </Text>
                </TouchableOpacity>

                <Text style={styles.instructions}>
                    {this.state.name}{this.state.description}年龄{this.props.age}{this.props.sex}
                </Text>

            </View>
        );
    }
    onPressEvent() {
        // alert('按下了')
        // var v = this.refs.RootView; // 根据ref可以拿到组件
        // alert(v)
        this.setState({ // 更新
            name: '张三',
            description: '是个大好人'
        })
    }
    onPressInEvent(e) {
        alert(e)
    }
    onPressOutEvent(e) {
        alert(e)
    }
    longPressEvent(){
        alert('长按')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 20
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = touch;
