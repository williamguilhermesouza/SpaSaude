import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    massageView: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 45,
        width: '80%',
        backgroundColor: '#FDD4C3',
        borderRadius: 15,
    },

    massageHeader: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'stretch',
        textAlign: 'justify',
        paddingTop: 5,
        justifyContent: 'space-between',
    },

    massageHeaderTitle: {
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily: 'ABeeZee',
    },

    expandCollapseButton: {
        marginTop: 5,
    },

    massageList: {
        alignItems: 'flex-start',
        width: '86%',
        marginBottom: 30,
    },

    massageListTitle: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
    },

    massageListFooter: {
        flexDirection: 'row',
        width: '85%',

    },

    opsText: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    addButton: {
        marginLeft: 20,
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#F4AA8A',
        borderRadius: 5,
    },

    addButtonText: {
        paddingTop: 5,
        fontFamily: 'ABeeZee',
        fontSize: 14,
        paddingBottom: 5,
    },

});
