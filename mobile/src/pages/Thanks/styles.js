import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    thanksLabel: {
        marginTop: '45%',
        width: '80%',
        textAlign: 'center',
        marginBottom: 22,
        fontFamily: 'ABeeZee',
        fontSize: 22,
    },

    thanksLabel2: {
        width: '80%',
        textAlign: 'center',
        fontFamily: 'ABeeZee',
        fontSize: 18,
    },

    newButton: {
        bottom: 50,
        marginTop: 70,
        alignSelf: 'center',
        alignItems: 'center',
        width: '70%',
        height: 60,
        backgroundColor: '#F4AA8A',
        borderRadius: 10,

    },

    newText: {
        paddingTop: 15,
        fontSize: 20,
        fontFamily: 'ABeeZee',
    },
});
