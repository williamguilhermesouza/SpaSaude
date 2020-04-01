import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FDD4C3',
    },

    image: {
        width: '100%',
        height: '45%',
        borderRadius: 10,
    },

    horizontalLine: {
        width: '100%',
        height: '5%',
        backgroundColor: '#F4AA8A',
    },

    titleContainer: {
        top: -55,
        alignSelf: 'center',
        flexDirection: 'column',
    },

    title: {
        fontSize: 56,
        fontFamily: 'IM Fell Double Pica',
    },

    subtitle: {
        top: -20,
        left: 15,
        alignSelf: 'flex-end',
        fontSize: 24,
        fontFamily: 'IM Fell Double Pica',
    },

    firstTimeButton: {
        alignItems: 'center',
        width: '60%',
        height: '9%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    firstTimeText: {
        paddingTop: 10,
        fontSize: 26,
        fontFamily: 'ABeeZee',
    },

    toLoginButton: {
        marginTop: '10%',
        alignItems: 'center',
        width: '60%',
        height: '9%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    toLoginText: {
        paddingTop: 10,
        fontSize: 26,
        fontFamily: 'ABeeZee',
    },
});