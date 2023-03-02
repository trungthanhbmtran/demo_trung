'use client'
import { Divider, Grid, Paper, Stack } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Description = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Tim kiem…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
            <Grid item container xs  >
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Item>Nuoc CHXHCNVN</Item>
                    <Item>Gioi thieu chinh phu</Item>
                    <Item>Thu dien tu cong vu chinh phu</Item>
                </Stack>
                {/* <Paper>
                     Nuoc CHXHCNVN
                    </Paper>
                <Grid item>
                <Paper>
                Gioi Thieu Chinh phu
                    </Paper>
                </Grid>
                <Grid item>
                    Thu dien tu Cong Vu CP
                </Grid> */}
            </Grid>
            <Grid item xs={2}>
                Hien thi thoi tiet hien tai
            </Grid>
        </Grid>
    )
}