const theme = {
    color: {
        darkRed: '#990808',
        red: '#AB1111',
        lightRed: '#CF3636',
        grey: ['#EFEFEF', '#DEDEDE', '#C1C1C1', '#616161', '#4A4A4A'],
        blue: '#88D4FF',
        white: '#FFFFFF',
        black: '#1B1B1B',
    },

    shadow: ['box-shadow: 4px 6px 10px -2px rgba(27,27,27,0.75);'],

    media: {
        above: {
            xl: '@media (min-width: 1700px)',
            l: '@media (min-width: 1330px)',
            m: '@media (min-width: 1000px)',
            s: '@media (min-width: 480px)',
            xs: '@media (min-width: 360px)',
        },
        below: {
            xl: '@media (max-width: 1700px)',
            l: '@media (max-width: 1330px)',
            m: '@media (max-width: 1000px)',
            s: '@media (max-width: 480px)',
            xs: '@media (max-width: 360px)',
        },
    },
};

export default theme;
