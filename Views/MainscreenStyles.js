module.exports = {
    main_scr: {
        marginTop: 70,
        display: 'flex',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%'
    },
    main_scr_dis: {
        elevation: 3, // just like box shadow. but by default the bg is transparent so to show change bg to white or something else.
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 5,
        display: 'flex',
        marginBottom: 10,
        padding: 10,
    },
    main_scr_dis_text: {
        fontSize: 50,
        textAlign: 'right',
    },
    main_scr_keypad: {
        width: '100%',
        height: '70%',
        display: 'flex', // by default the direction is column in react-native so change it to row
        // flexDirection: 'row',
    },
    main_scr_keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
    },
    btn_outer: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    bg_btn: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 25,
    },
    btn1_outer: {
        width: 80,
        height: 80,
        backgroundColor: '#EF2917',
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    bg1_btn: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    btn2_outer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        elevation: 10,
        backgroundColor: '#93BEDF',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg2_btn: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
}