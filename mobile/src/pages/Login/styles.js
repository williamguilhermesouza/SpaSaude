import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
        width: 300,
        height: 250,
        borderRadius: 400,
        opacity: 0.5,
    },

    titleContainer: {
        top: -40,
        alignSelf: 'center',
        flexDirection: 'column',
        opacity: 0.5,
    },

    title: {
        fontSize: 48,
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
        fontSize: 19,
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
        fontSize: 16,
    },

    entryButton: {
        alignItems: 'center',
        width: 140,
        height: 50,
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    entryText: {
        paddingTop: 10,
        fontSize: 18,
        fontFamily: 'ABeeZee',
    },
});
