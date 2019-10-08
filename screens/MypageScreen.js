import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

class Button extends Component {
  constructor(props){
    super(props)
  }
    render() {
      return (
        <View style={{flex: 2, height: 100, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', fontsize:20}}>
          <TouchableOpacity style={{backgroundColor:''}} onPress={this.props.onPress}>

          <Text>{this.props.name}</Text>
          
          </TouchableOpacity>
        </View>
      )
    }
  }
  
  export default class buttonGroup extends Component {
    render() {
      return(
        <View style={styles.buttonGroup}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <Button 
            name="개인정보수정"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
            <Button 
            name="출/퇴근 이력 조회"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
            <Button 
            name="근로계약서 조회"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <Button 
            name="기초 보건교육 이수증 등록"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
            <Button 
            name="자격증/경력 등록"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
            <Button 
            name="계좌번호 등록"
            onPress={() => {
              this.props.navigation.push("PersonInfo")}} />
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    buttonGroup: {
      height: 200,
      marginTop: 100,
      borderRadius: 10

      // backgroundColor: '#C5E1A5',
    },
  })