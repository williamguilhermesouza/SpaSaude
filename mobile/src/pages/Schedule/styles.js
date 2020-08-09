import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    pickerButton: {
        marginTop: '20%',
        width: '60%',
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    pickerButtonText: {
        fontFamily: 'ABeeZee',
        fontSize: 18,
    },

    paymentLabel: {
        alignSelf: 'center',
        fontFamily: 'ABeeZee',
        fontSize: 18,
        marginBottom: 20,
    },

    paymentSelector: {
        width: '70%',
        marginTop: '20%',
        marginBottom: '17%',
    },

    nextButton: {
        bottom: 50,
        marginTop: 70,
        alignSelf: 'center',
        alignItems: 'center',
        width: '50%',
        height: '8%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,

    },

    nextText: {
        paddingTop: 10,
        fontSize: 22,
        fontFamily: 'ABeeZee',
    },
});
