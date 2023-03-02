'use client'
import { Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

const Catalogs = ['Catalogue', 'HD sử dụng', 'Hệ thống showroom']

const ToolBar = () => {
    return (
        <Toolbar sx={{ backgroundColor: "green" }}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center" >
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        startIcon={<HomeIcon />}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Danh mục
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search></Grid>
                <Grid item container spacing={2} xs={4}>
                    {Catalogs.map((e, i) =>
                        <Grid item>
                            <Button key={i} variant="contained" >{e}</Button>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={1}> Change languages</Grid>
            </Grid>
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs> */}
        </Toolbar>


    )
}

export default ToolBar