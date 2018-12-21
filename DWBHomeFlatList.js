import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity, Button,
} from 'react-native';

// 初始化数据
var Arr = [
    {name:'河北省',},
    {name:'山西省',},
    {name:'辽宁省',},
    {name:'吉林省',},
    {name:'黑龙江省',},
    {name:'江苏省',},
    {name:'浙江省',},
    {name:'福州省',}];

export default class MyFlatList extends Component {

    render() {
        //给数据追加一个key的字段，不然会有警告的,参数数组中的每一项，需要包含 key 值作为唯一标示
        for (var i = 0; i < Arr.length; i++) {
            Arr[i]['key'] = i;
        }
        return (
            //初始化FlatList
            <View style={styles.container}>
                <FlatList style={styles.FlatListStyle}
                          data = {Arr}
                          ListHeaderComponent={this.ListHeaderComponent.bind(this)}
                          ListFooterComponent={this.ListFooterComponent.bind(this)}
                          renderItem={this.renderItemView.bind(this)}
                          //分割线组件
                          ItemSeparatorComponent={ItemDivideComponent}
                >

                </FlatList>



            </View>
        );
    }

    //列表的每一行
    renderItemView({item,index}){
        return(

            <TouchableOpacity onPress={()=>{
                this.Cellheader(item)}
            }
            >
                <View style={{
                    backgroundColor:'#ffffff',//背景色
                    height:59,//view高度
                    justifyContent:'center',//内容上下居中
                    alignItems: 'center'//内容左右居中
                }}>

                    <Text>{item.name}</Text>


                </View>

            </TouchableOpacity>
        );
    }

    //点击每一行的对象
    Cellheader(data){
        alert(data.name);
    }

    //定义页头
    ListHeaderComponent(){
        return(
            <View style={{height:140,backgroundColor:'red',justifyContent: 'center',}}>
                <Text>我是页头</Text>
            </View>
        );
    }
    //定义页脚
    ListFooterComponent(){
        return(
            <View style={{height:140,backgroundColor:'yellow',justifyContent: 'center',}}>
                <Text>我是页脚</Text>
            </View>
        );
    }
}

// //设置分割线
// renderSeparator(){
//     return (
//         <View style={{height: 1, backgroundColor: 'skyblue'}}></View>
//     );
// };


class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: 'skyblue'}}></View>
        );
    }
};

const styles = StyleSheet.create({
    //控制器属性
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
//FlatList属性
    FlatListStyle:{
        backgroundColor:'#f6f6f6',
        flex:1,
        marginTop:64,
        marginBottom: 100,
        // width:300
    }

});


