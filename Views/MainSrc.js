import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import styles from './MainscreenStyles';

const MainSrc = () => {
    const [value, setValue] = useState('0');
    const [bracketOpen, setBracketOpen] = useState(false);

    const handlePress = (val) => {
        if (val == 'AC') {
            setValue('0')
        }
        else if (val == '=') {
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch (e) {
                setValue('Format Error')
            }
        }
        else if (val == 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketOpen(true)

            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketOpen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (value == '0') {
                if (val == '+' || val == '-' || val == '*' || val == '/' || val == '.' || val == '%') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
            else if (isNaN(val)) {
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else if (!isNaN(val)) {
                setValue(value + val)
            }
        }
    }

    return (
        <View style={styles.main_scr}>
            <ScrollView style={styles.main_scr_dis}>
                <Text style={styles.main_scr_dis_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </ScrollView>
            <View style={styles.main_scr_keypad}>
                {/* row 1 */}
                <View style={styles.main_scr_keypad_row}>
                    <Pressable onPress={() => handlePress('AC')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_btn}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('()')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>()</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('%')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('/')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>/</Text>
                        </View>
                    </Pressable>
                </View>
                {/* row 2 */}
                <View style={styles.main_scr_keypad_row}>
                    <Pressable onPress={() => handlePress('7')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('8')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('9')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('*')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>*</Text>
                        </View>
                    </Pressable>
                </View>
                {/* row 3 */}
                <View style={styles.main_scr_keypad_row}>
                    <Pressable onPress={() => handlePress('4')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('5')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('6')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('-')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>-</Text>
                        </View>
                    </Pressable>
                </View>
                {/* row 4 */}
                <View style={styles.main_scr_keypad_row}>
                    <Pressable onPress={() => handlePress('1')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('2')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('3')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>3</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('+')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>+</Text>
                        </View>
                    </Pressable>
                </View>
                {/* row 5 */}
                <View style={styles.main_scr_keypad_row}>
                    <Pressable onPress={() => handlePress('0')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('.')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_btn}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('back')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_btn}>&lt;-</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('=')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_btn}>=</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default MainSrc;