import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(() => ({
    item: {
        width: 300,
        height: 350,
        border: '1px solid rgb(191, 191, 191)',
        marginTop: 30,
        marginRight: 40,
        borderRadius: 7,
        position: 'relative',
        padding: 30,
        boxSizing: 'border-box'
    },

    itemCart: {
        backgroundColor: 'rgb(198, 37, 37)',
        width: 60,
        height: 40,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'absolute',
        bottom: 20,
        right: 20,
        '& img': {
            width: 30,
            height: 30
        }
    },
    itemImg: {
        '& img': {
            width: 150,
            height: 150,
            position: 'absolute',
            left: 'calc(50% - 75px)'
        }
    },
    itemInfo: {
        marginTop: 180
    },
    itemInfoName: {
        marginBottom: 70,
        fontWeight: 'bold'
    },
    itemSale: {
        '& .itemInfoName': {
            marginBottom: 20
        }
    },
    itemSaleAmount: {
        width: 40,
        height: 30,
        padding: '0 5px',
        background: '#2b8515',
        color: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemInfoPrice: {
        fontWeight: 'bold',
        fontSize: 20
    },
    sale: {
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        marginBottom: 20
    },
    crossed: {
        textDecoration: 'line-through',
        color: 'grey',
        fontSize: 16
    },
    productCartIn: {
        background: '#2b8515'
    },
    itemInfoNameSale: {
        marginBottom: 20,
        fontWeight: 'bold'
    }
}))