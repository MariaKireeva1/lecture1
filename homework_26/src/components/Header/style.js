import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(() => ({
    header: {
        boxSizing: 'border-box',
        height: 70,
        backgroundColor: '#2b8515',
        padding: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignitems: 'center'
    },

    headerLogout: {
        display: 'none',
        color: '#ffffff',
        fontSize: 20
    },
    headerLogoutActive: {
        display: 'block',
        cursor: 'pointer',
        textDecoration: 'underline'
    },

    headerCart: {
        cursor: 'pointer',
        position: 'relative',
        '& img': {
            width: 50,
            height: 50
        }
    },

    headerCartCircle: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        position: 'absolute',
        left: 40,
        top: 0,
        backgroundColor: '#ffffff',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerStick: {
        width: 2,
        height: 50,
        backgroundColor: 'white '
    },

    headerInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
    },

    headerLogo: {
        '& img': {
            width: 70,
            height: 70
        },
        cursor: 'pointer'
    },
    headerGreeting: {
        cursor: 'pointer',
        color: '#ffffff',
        fontSize: 20,
        '& span': {
            color: '#ffffff',
            cursor: 'pointer',
            textDecoration: 'underline'

        }
    }
}))