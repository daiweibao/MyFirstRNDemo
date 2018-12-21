/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Animated
} from 'react-native';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const {width, height} = Dimensions.get('window');

export default class RNProjectTestApp extends Component {

    constructor(props){
        super(props);

        this.state={
            data: [],
            refreshing: false,
        };

        this.renderItem = this.renderItem.bind(this);
        this.separatorComponent = this.separatorComponent.bind(this);
        this.listFooterComponent = this.listFooterComponent.bind(this);
        this.listHeaderComponent = this.listHeaderComponent.bind(this);
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                data: [
                    {key: '1'},
                    {key: '2'},
                    {key: '3'},
                    {key: '4'},
                    {key: '5'},
                    {key: '6'},
                    {key: '7'},
                    {key: '8'},
                    {key: '9'},
                    {key: '10'},

                ],
            })
        }, 2000)
    }

    /*row*/
    renderItem(item){
        return (
            <View>
                <Text style={{
                    height: 44,
                    lineHeight: 44,
                    width: (width-10*4)/3,
                    marginLeft: 10,
                    backgroundColor: 'blue',
                    color: 'white',
                    textAlign: 'center'}}
                >
                    {item.key}
                </Text>
            </View>
        )
    }
    /*分割线*/
    separatorComponent(){
        return <View style={{height: 1, backgroundColor: 'red'}}/>
    }

    /*底部组件*/
    listFooterComponent(){
        return this.state.data.length !== 0 ? <View>
            <Text style={{alignItems: 'center', textAlign: 'center'}}>我是底部组件</Text>
        </View> : null;
    }

    /*头部组件*/
    listHeaderComponent(){
        return this.state.data.length !== 0 ? <View>
            <Text style={{alignItems: 'center', textAlign: 'center'}}>我是头部组件</Text>
        </View> : null;
    }

    /*没有数据时显示的组件*/
    listEmptyComponent() {
        return <View style={{backgroundColor: 'red', flex: 1, height: height}}>
            <Text style={{
                alignItems: 'center',
                textAlign: 'center',
                lineHeight: height,
                color: 'white'}}
            >
                暂时没有数据,先等2秒
            </Text>
        </View>
    }

    /*下拉刷新*/
    refresh(){
        this.setState({
            data: [{key: '你好'}, {key: '再见'}],
            refreshing: true,
        });

        setTimeout(()=>{
            this.setState({
                refreshing: false,
            })
        },2000);

    }
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList style={{marginTop: 20}}
                          ref="flatList"
                          extraData={this.state}
                          keyExtractor={(item, index) => String(index) }
                          data={this.state.data} // 数据
                          renderItem={({item}) => this.renderItem(item)} // row
                          ItemSeparatorComponent={this.separatorComponent} // 分割线
                          horizontal={false} // 水平还是垂直
                          ListFooterComponent={this.listFooterComponent} // 底部组件
                          ListHeaderComponent={this.listHeaderComponent} // 头部组件
                          ListEmptyComponent={this.listEmptyComponent} // 没有数据时显示的界面
                          refreshing={this.state.refreshing} // 是否刷新 ，自带刷新控件
                          onRefresh={()=>{
                              this.refresh();
                          }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                          numColumns ={3} // 指定多少列  等于 1 的时候，不能写 columnWrapperStyle
                          columnWrapperStyle={{borderWidth:2, borderColor:'black'}} // 一整行的row设置样式
                />
                <TouchableOpacity onPress={()=>{
                    {/*this.refs.flatList.scrollToEnd(); // 滚动到底部*/}
                    this.refs.flatList.scrollToOffset({animated: true, offset: 200}); // 滚动到某一个位置

                    {
                        /*
                         scrollToEnd ({params?: ?{animated?: ?boolean}})：滚动到末尾，如果不设置getItemLayout属性的话，可能会比较卡。
                         scrollToIndex (params: {animated?: ?boolean, index: number, viewPosition?: number})：滚动到制定的位置
                         scrollToOffset (params: {animated?: ?boolean, offset: number})：滚动到指定的偏移的位置。
                        */
                    }
                }}>
                    <Text style={{textAlign: 'center'}}>点击跳转</Text>
                </TouchableOpacity>
            </View>
        );
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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNProjectTestApp', () => RNProjectTestApp);
