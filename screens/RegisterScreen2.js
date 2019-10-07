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
                            fontSize: 15,
                            color: 'black',
                            marginTop: -20,
                            fontWeight: '200',
                        }}
                        >
                        회원가입
                    </Text>
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-briefcase'}
                        placeholder={'사업자 번호'}
                    />
                     <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-phone-portait'}
                        placeholder={'휴대폰 번호'}
                    />
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-lock'}
                        placeholder={'인증 번호'}
                    />
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-person'}
                        placeholder={'아이디'}
                    />
                   
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-lock'}
                        placeholder={'비밀번호'}
                        
                    />
                    <IconTextInput
                        style={{ marginTop: 10 }}
                        iconName={'ios-phone-portrait'}
                        placeholder={'비밀번호 확인'}
                        
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'black',
                            marginTop: 10,
                            fontWeight: '200',
                        }}
                        >
                        가입 약관
                    </Text>
                    
                     <RoundButton
                        style={{ marginTop: 10 }}
                        title={'가입 완료'}
                        onPress={() => {
                            this.props.navigation.goBack(null);
                    }}
                    />
                      <RoundButton
                        style={{ marginTop: 10 }}
                        title={'취소'}
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
