import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(() => ({
    sign: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 50,
        '& form': {
            display: 'flex',
            flexDirection: 'column'
        },
        '& input': {
            width: 600,
            height: 30,
            padding: 20,
            boxSizing: 'border-box',
            marginBottom: 10,
            borderRadius: 10,
            border: '1px solid grey'
        }
    },
    signDivide: {
        width: 0.5,
        backgroundColor: 'grey'
    }
}))