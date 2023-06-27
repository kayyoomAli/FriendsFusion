// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TextStyle,
//   ViewStyle,
//   StyleProp,
//   StyleSheet,
//   ImageStyle,
//   TouchableOpacity,
//   KeyboardTypeOptions,
// } from 'react-native';
// import React from 'react';
// import {vh, vw} from '../utils/dimensions';
// import colors from '../utils/colors';
// /**
//  * @CustomTextInputProps interface
//  * @description defining the props of TextInput
//  */
// interface CustomTextInputProps {
//   ref?: any;
//   onFocus?: any;
//   leftIcon?: any;
//   inputMode?: any;
//   rightIcon?: any;
//   leftText?: string;
//   editable?: boolean;
//   lefIconOnPress?: any;
//   placeholder?: string;
//   rightIconOnPress?: any;
//   value?: string | undefined;
//   placeholderTextColor?: string;
//   maxLength?: number | undefined;
//   mainViewStyle?: StyleProp<ViewStyle>;
//   secureTextEntry?: boolean | undefined;
//   leftIconStyle?: StyleProp<ImageStyle>;
//   rightIconStyle?: StyleProp<ImageStyle>;
//   keyboardType?: KeyboardTypeOptions | undefined;
//   TextInputstyle?: StyleProp<TextStyle> | undefined;
//   onChangeText?: ((text: string) => void) | undefined;
// }

// /**
//  * @CustomTextInput function
//  * @description custom component of TextInput
//  */
// const CustomTextInput = React.forwardRef(
//   (props: CustomTextInputProps, ref: any) => {
//     // const handleFocus = () => {
//     //   ref?.current?.select();
//     // };
//     return (
//       <View style={[styles.mainContainerStyle, props.mainViewStyle]}>
//         {props.leftIcon && (
//           <TouchableOpacity activeOpacity={0.7} onPress={props.lefIconOnPress}>
//             <Image
//               resizeMode="contain"
//               source={props.leftIcon}
//               style={[styles.imageStlye, props.leftIconStyle]}
//             />
//           </TouchableOpacity>
//         )}
//         {props.leftText && (
//           <TouchableOpacity activeOpacity={0.7} onPress={props.lefIconOnPress}>
//             <Text style={{color: colors.black}}>{props.leftText}</Text>
//           </TouchableOpacity>
//         )}
//         <TextInput
//           ref={ref}
//           value={props.value}
//           // onFocus={handleFocus}
//           editable={props.editable}
//           maxLength={props.maxLength}
//           onChangeText={props.onChangeText}
//           keyboardType={props.keyboardType}
//           secureTextEntry={props.secureTextEntry}
//           placeholder={props.placeholder || 'Placeholder'}
//           style={[styles.inputStyle, props.TextInputstyle]}
//           placeholderTextColor={props.placeholderTextColor || 'black'}
//         />
//         {props.rightIcon && (
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={props.rightIconOnPress}>
//             <Image
//               resizeMode="contain"
//               source={props.rightIcon}
//               style={[styles.imageStlye, props.rightIconStyle]}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   },
// );

// export default React.memo(CustomTextInput);

// const styles = StyleSheet.create({
//   mainContainerStyle: {
//     borderWidth: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: vw(10),
//     justifyContent: 'space-between',
//   },
//   inputStyle: {
//     flex: 1,
//     height: vh(50),
//     paddingHorizontal: vw(10),
//   },
//   imageStlye: {
//     height: vw(20),
//     width: vw(20),
//   },
// });

import {
  View,
  Text,
  Image,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleProp,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
  KeyboardTypeOptions,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import colors from '../utils/color';
import {normalize, vh, vw} from '../utils/dimension';

/**
 * @CustomTextInputProps interface
 * @description defining the props of TextInput
 */
interface CustomTextInputProps {
  ref?: any;
  leftText?: string;
  rightText?: string;
  editable?: boolean;
  placeholder?: string;
  rightTextColor?: string;
  value?: string | undefined;
  lefIconOnPress?: () => void;
  rightIconOnPress?: () => void;
  placeholderTextColor?: string;
  maxLength?: number | undefined;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  multiline?: boolean | undefined;
  mainViewStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
  textInputstyle?: StyleProp<TextStyle> | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top' | undefined;
}

/**
 * @CustomTextInput function
 * @description custom component of TextInput
 */
const CustomTextInput = React.forwardRef(
  (props: CustomTextInputProps, ref: any) => {
    return (
      <View style={[styles.mainContainerStyle, props.mainViewStyle]}>
        {props.leftIcon && (
          <TouchableOpacity
            style={styles.touchableImageStyle}
            activeOpacity={0.7}
            onPress={props.lefIconOnPress}>
            <Image
              resizeMode="contain"
              source={props.leftIcon}
              style={[styles.imageStyle, props.leftIconStyle]}
            />
          </TouchableOpacity>
        )}
        {props.leftText && (
          <TouchableOpacity
            style={styles.touchableImageStyle}
            activeOpacity={0.7}
            onPress={props.lefIconOnPress}>
            <Text style={{color: colors.black}}>{props.leftText}</Text>
          </TouchableOpacity>
        )}
        <TextInput
          ref={ref}
          value={props.value}
          editable={props.editable}
          maxLength={props.maxLength}
          multiline={props.multiline}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          textAlignVertical={props.textAlignVertical}
          placeholder={props.placeholder || 'Placeholder'}
          style={[styles.inputStyle, props.textInputstyle]}
          placeholderTextColor={props.placeholderTextColor || 'grey'}
        />
        {props.rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.touchableRightIconStyle}
            onPress={props.rightIconOnPress}>
            <Image
              resizeMode="contain"
              source={props.rightIcon}
              style={[styles.imageStyle, props.rightIconStyle]}
            />
          </TouchableOpacity>
        )}
        {props.rightText && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.rightTextStyle}
            onPress={props.rightIconOnPress}>
            <Text style={{color: props.rightTextColor || colors.black}}>
              {props.rightText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default React.memo(CustomTextInput);

const styles = StyleSheet.create({
  mainContainerStyle: {
    borderWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vh(25),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderColor: colors.shade_grey,
    borderRadius: normalize(10),
  },
  inputStyle: {
    flex: 1,
    height: vh(60),
    paddingHorizontal: vw(15),
    color: colors.black,
  },
  imageStyle: {
    height: vw(20),
    width: vw(20),
  },
  touchableImageStyle: {
    paddingLeft: vw(15),
  },
  touchableRightIconStyle: {
    paddingRight: vw(15),
  },
  rightTextStyle: {
    marginRight: vw(10),
  },
});

