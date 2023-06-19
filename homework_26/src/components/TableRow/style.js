import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(() => ({
    cartName: {
        display: 'flex',
        alignItems: 'center',
        gap: 15
    },
    cartPhoto: {
        width: 70,
        height: 70
    },
    cartInput: {
        width: 150,
        borderRadius: 5,
        padding: 5
    },
    cartDelete: {
        cursor: 'pointer',
        width: 30,
        height: 30
    }
}))