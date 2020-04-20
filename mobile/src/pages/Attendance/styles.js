import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    massageCollapseOpacity: {
        alignItems: 'center',
        marginBottom: 45,
        width: '80%',
        height: '9%',
        backgroundColor: '#FDD4C3',
        borderRadius: 15,
    },

    massageView: {
        alignItems: 'center',
        marginBottom: 45,
        width: '80%',
        height: '60%',
        backgroundColor: '#FDD4C3',
        borderRadius: 15,
    },

    massageHeader: {
        paddingTop: 10,
        width: '85%',
        flexDirection: 'row',
        alignItems: 'stretch',
    },

    massageHeaderTitle: {
        marginLeft: '15%',
        marginRight: '10%',
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
        height: '65%',
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
        marginTop: 20,
        width: '85%',

    },

    opsText: {
        fontWeight: 'bold',
        fontSize: 22,
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
        fontSize: 18,
        paddingBottom: 5,
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
});