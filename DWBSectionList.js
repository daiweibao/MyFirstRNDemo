
// SectionList创建+分组+组头+点击cell

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Text, SectionList, Alert, TouchableOpacity} from 'react-native';
export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let sections =[
            {typeName:"导演", persons:[{name:"唐季礼"},{name:"但是测试时加上了在android上又显示不正常，无奈下为了不影响android,做了调整，最后的样式代码如下:"}]},
            {typeName:"演员",persons:[{name:"成龙"},{name: "李治廷"},{name: "李世民"},{name: "罗奎"},{name:"成龙"},{name: "李治廷"},{name: "李世民"},{name: "罗奎"}]}];

        //这里要对数组转换一下，
        // 因为SectionList要求item必须是data的数组，
        // 如果把data写成其他单词则会报错
        //不管你是否使用一个或多个不同的section，都要重新定义以下section如：
        // tempData.key = item.typeName;
        // temData.key =`${item.typeName} ${item.typeNameEn}`
        //   tempData.typeName = item.typeName; tempData.key = item.typeNameEn
        let tempArr = sections.map((item, index) => {
            let tempData = {};
            tempData.key = item.typeName;
            tempData.data = item.persons;
            return tempData
        });

        return (
            <View style={{ flex: 1 }}>
                <SectionList style={styles.SectionStyleBK}
                    renderSectionHeader={this.renderSectionHeader}
                    renderItem={this.renderItem}
                    sections={tempArr}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() =>



                        <View

                        style={{ backgroundColor: '#25B960', alignItems: 'center', height: 100 }}>

                            <TouchableOpacity onPress={()=>{

                                Alert.alert('点击了头');


                            }}>
                            <Text style={{ fontSize: 18, color: '#ffffff' }}>
                                新浪科技讯 北京时间12月11日下午消息，上周，一位中国投资人指控腾讯音乐的联席总裁谢国民利用谎言和威胁让他出售了一家公司的股份，而这家公司最终成为中国最大音乐流媒体服务公司的一部分。之后，这位投资者在中国的仲裁程序中对腾讯音乐(0,0.00,0.00%)、腾讯音乐联席总裁谢国民以及其他人提出指控。
                            </Text>

                        </TouchableOpacity>
                        </View>}




                    ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 100 }}>


                        <TouchableOpacity onPress={()=>{
                           //这里写点击事件
                            Alert.alert('点击了脚步')
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff' }}>这是尾部视图</Text>

                        </TouchableOpacity>




                    </View>}
                />
            </View>
        );
    }

    renderSectionHeader = (info) => {
        let section = info.section.key;
        return (
            <TouchableOpacity onPress={()=>{

                Alert.alert(section);
            }}>

                <Text
                    style={styles.sectionStyle}>{section}</Text>

            </TouchableOpacity>


        )
    };

    ActionCell(data){
        Alert.alert(data);
    }

    renderItem = (info) => {
        let item = info.item.name;
        return (

        <TouchableOpacity onPress={()=>{
            this.ActionCell(item);
        }}>
            <View>
                <Text style={styles.itemStyle}>{item}</Text>
            </View>

        </TouchableOpacity>


        )
    };
}



const styles = StyleSheet.create({
    //样式
    SectionStyleBK:{
        marginTop: 88,
        marginBottom: 0,
    },

    //cell内容样式
    itemStyle: {
        lineHeight: 44,//设置这个属性可以居中
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#999999',
        color: 'white',
        justifyContent: 'center',//
        alignItems: 'center',
        fontSize: 20
    },
    //组头内容样式
    sectionStyle: {
        lineHeight: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#9CEBBC',
        color: 'white',
        justifyContent: 'center',//
        alignItems: 'center',
        fontSize: 30
    }
});
