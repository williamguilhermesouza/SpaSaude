import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    confirmationBox: {
        width: '90%',
        backgroundColor: '#FDD4C3',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 15,
        marginTop: 30,
    },

    confirmationTitle: {
        fontFamily: 'ABeeZee',
        marginBottom: 20,
        fontSize: 18,
    },

    confirmationList: {
        width: '80%',
            marginRight: 20,
        flexDirection: 'row',
    },

    confirmationLi: {
        fontFamily: 'ABeeZee',
        paddingRight: 15,
    },

    confirmButton: {
        position: 'absolute',
        bottom: 80,
        alignItems: 'center',
        width: 140,
        height: 50,
        backgroundColor: '#F4AA8A',
        borderRadius: 10,

    },

    confirmText: {
        paddingTop: 10,
        fontSize: 18,
        fontFamily: 'ABeeZee',
    },
});
