import {
  Text,
  TextStyle,
  ViewStyle,
  StyleProp,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '../utils/dimensions';
import colors from '../utils/colors';

/**
 * @ButtonProps interface
 * @description defining the props of CustomButton
 */
interface ButtonProps {
  buttonText?: string;
  disabled?: boolean | undefined;
  buttonTextStyle?: StyleProp<TextStyle>;
  customButtonStyle?: StyleProp<ViewStyle>;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}

/**
 * @CustomButton interface
 * @description return the CustomButton for reuseablilty
 */
const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disabled}
      style={[
        styles.loginBtn,
        {backgroundColor: props.disabled ? 'grey' : colors.purple},
        props.customButtonStyle,
      ]}
      onPress={props.onPress}>
      <Text style={[styles.btnText, props.buttonTextStyle]}>
        {props.buttonText || 'Enter text'}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);

const styles = StyleSheet.create({
  loginBtn: {
    height: vh(50),
    marginTop: vh(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(10),
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: normalize(18),
  },
});
