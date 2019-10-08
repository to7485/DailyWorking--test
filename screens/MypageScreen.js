import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Button from '../components/Button'

  
  export default class MypageScreen extends Component {
    render() {
      return(
        <View style={styles.container}>
          <Button
            style={{ marginTop: 1 }}
            title={'개인정보수정'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        
          <Button
            style={{ marginTop: 1 }}
            title={'출/퇴근 이력 조회'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        
          <Button
            style={{ marginTop: 1 }}
            title={'근로계약서 조회'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        
          <Button
            style={{ marginTop: 1 }}
            title={'기초 보건교육 이수증 등록'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        
          <Button
            style={{ marginTop: 1 }}
            title={'자격증/경력 등록'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        
          <Button
            style={{ marginTop: 1 }}
            title={'계좌번호 등록'}
            onPress={() => {
              this.props.navigation.navigate('Register');
        }}
        />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      height: 200,
      marginTop: 100,
      borderRadius: 10

      // backgroundColor: '#C5E1A5',
    },
  })