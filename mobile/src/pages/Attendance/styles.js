import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    nextButton: {
        alignItems: 'center',
        width: '60%',
        height: '9%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    nextText: {
        paddingTop: 10,
        fontSize: 26,
        fontFamily: 'ABeeZee',
    },

    massageOpacity: {
        alignItems: 'center',
        marginBottom: 45,
        width: '80%',
        height: '9%',
        backgroundColor: '#FDD4C3',
        borderRadius: 15,
    },

    massageOpacityTitle: {
        paddingTop: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily: 'ABeeZee',
    },
});