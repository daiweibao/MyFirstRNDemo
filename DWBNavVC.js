import React from 'react';
import { Button, View, Text,Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

//第一页
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>【首页】第一个屏幕</Text>
                <Button
                    title="跳转到详情"
                    //跳转到详情：this.props.navigation.push('Details')
                    onPress={() => this.props.navigation.push('Details')}
                />
            </View>
        );
    }
}

//详情界面
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>第二个界面</Text>
                <Button
                    title="进入第三个界面"
                    onPress={() => this.props.navigation.push('ThreeVC')}
                />
                
                <Button
                    title="返回首页"
                    //返回上一页：this.props.navigation.pop()
                    onPress={() => this.props.navigation.pop()}
                />
            </View>
        );
    }
}

//第三个界面
class ThreeVCScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>第三个界面</Text>
                <Button
                    title="返回第二个界面"
                    //返回上一页：this.props.navigation.pop()
                    onPress={() => this.props.navigation.pop()}
                />
            </View>
        );
    }
}


const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        ThreeVC:ThreeVCScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

//导出组件
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
