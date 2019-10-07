import React, { Component } from 'react'
import { Text, StyleSheet, View , KeyboardAvoidingView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'



export default class RegisterScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView
            style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'tomato',
                justifyContent: 'center',
              }}
              behavior="padding"
            >
                
                <View style={styles.container}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'black',
                            marginTop: -20,
                            fontWeight: '200',
                        }}
                        >
                        회원가입
                    </Text>
                    
                    
                     <RoundButton
                        style={{ marginTop: 10 }}
                        title={'개인 회원 가입'}
                        onPress={() => {
                            this.props.navigation.navigate('Register1');
                    }}
                    />
                      <RoundButton
                        style={{ marginTop: 10 }}
                        title={'기업 회원 가입'}
                        onPress={() => {
                            this.props.navigation.navigate('Register2');
                    }}
                    />
                     <RoundButton
                        style={{ marginTop: 10 }}
                        title={'뒤로 가기'}
                        onPress={() => {
                            this.props.navigation.goBack(null);
                    }}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 30,
        alignItems: 'center',
      }
})
