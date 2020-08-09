import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
        width: '50%',
        height: '35%',
        borderRadius: 100,
        opacity: 0.5,
    },

    titleContainer: {
        top: -40,
        alignSelf: 'center',
        flexDirection: 'column',
        opacity: 0.5,
    },

    title: {
        fontSize: 52,
        fontFamily: 'IM Fell Double Pica',
    },

    subtitle: {
        top: -20,
        left: 15,
        alignSelf: 'flex-end',
        fontSize: 23,
        fontFamily: 'IM Fell Double Pica',
    },

    input: {
        padding: 2,
        width: '65%',
        borderColor: '#F4AA8A',
        borderWidth: 3,
        borderRadius: 12,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 22,
    },

    fPassLink: {
        paddingTop: 10,
    },

    firstTime: {
        paddingBottom: 10,
        marginBottom: 20,
    },

    fPassText: {
        fontStyle: 'italic',
        color: '#777',
        fontSize: 17,
    },

    entryButton: {
        alignItems: 'center',
        width: '50%',
        height: '8%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    entryText: {
        paddingTop: 10,
        fontSize: 22,
        fontFamily: 'ABeeZee',
    },
});
