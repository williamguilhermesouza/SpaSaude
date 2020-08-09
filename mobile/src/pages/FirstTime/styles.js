import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: '10%',
    },

    input: {
        paddingTop: 5,
        borderBottomColor: '#E5E5E5',
        width: '80%',
        borderBottomWidth: 3,
        alignSelf: 'flex-start',
    },

    doubleInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    
    doubleInputInput: {
        paddingTop: 5,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 3,
        width: '50%',
        marginRight: 20,
    },

    avancarButton: {
        marginTop: 60,
        alignItems: 'center',
        marginLeft: 35,
        width: '50%',
        height: '8%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,
    },

    avancarText: {
        paddingTop: 10,
        fontSize: 22,
        fontFamily: 'ABeeZee',
    }
});
