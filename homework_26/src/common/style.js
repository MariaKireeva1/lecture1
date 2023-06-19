import { makeStyles } from "@mui/styles";

export const useStylesCommon = makeStyles(() => ({
    signTitle: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '20px 0'
    },
    signSubtitle: {
        fontSize: '1.17em',
        fontWeight: 'bold',
        margin: '20px 0'
    },
    error: {
        width: 600,
        height: 30,
        padding: 20,
        boxSizing: 'border-box',
        alignItems: 'center',
        color: 'rgb(177, 58, 58)',
        borderRadius: 10,
        backgroundColor: 'rgb(228, 214, 214)',
        display: 'none'
    },
    errorActive: {
        display: 'flex'
    },
    cartTitle: {
        '&.MuiTypography-root': {
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#2b8515'
        }
    },
    cartContainer: {
        display: 'flex',
        margin: 50,
        gap: 100,
    },
    cartTable: {
        '& td': {
            padding: '20px 40px',
            textAlign: 'center',
            width: 150,
            boxSizing: 'border-box',
            verticalAlign: 'middle'
        },
        '&  td:first-child': {
            width: 200
        },
        '& tr': {
            borderBottom: '1px solid grey'
        },
        '& tr:first-child, & tr:last-child': {
            border: 'none'
        }
    },
    cartInfoTable: {
        textAlign: 'center',
        '& td': {
            whiteSpace: 'nowrap',
            paddingBottom: 20
        },
        '& tr td:first-child': {
            paddingRight: 200
        },
        '& td:last-child': {
            textAlign: 'end'
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
    }
}))