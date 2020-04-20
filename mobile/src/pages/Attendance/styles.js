import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    scrollContainer: {
        paddingTop: 50,
        width: '100%',
    },

    nextButton: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        width: '60%',
        height: 50,
        backgroundColor: '#F4AA8A',
        borderRadius: 10,

    },

    nextText: {
        paddingTop: 10,
        fontSize: 26,
        fontFamily: 'ABeeZee',
    },
});