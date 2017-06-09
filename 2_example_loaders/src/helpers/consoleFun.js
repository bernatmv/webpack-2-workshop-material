let style = {
    title: [
        'display: block',
        'background: transparent',
        'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',
        'font-size: 100px',
        'color: white',
        'padding: 0 *',
        'margin: 0 0',
        'text-aling: center',
        `text-shadow: 0 1px 0 #ccc,
                    0 2px 0 #c9c9c9,
                    0 3px 0 #bbb,
                    0 4px 0 #b9b9b9,
                    0 5px 0 #aaa,
                    0 6px 1px rgba(0,0,0,.1),
                    0 0 5px rgba(0,0,0,.1),
                    0 1px 3px rgba(0,0,0,.3),
                    0 3px 5px rgba(0,0,0,.2),
                    0 5px 10px rgba(0,0,0,.25),
                    0 10px 10px rgba(0,0,0,.2),
                    0 20px 20px rgba(0,0,0,.15)`
    ].join('; '),
    exercice: [
        'display: block',
        'background: transparent',
        'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',
        'font-size: 12px',
        'color: black'
    ].join('; '),
    normal: [
        'display: block',
        'background: transparent',
        'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',
        'font-size: 12px',
        'color: black'
    ].join('; '),
    warning: [
        'display: block',
        'background: yellow',
        'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',
        'font-size: 22px',
        'font-weight: 800',
        'color: red'
    ].join('; ')
};

export const consoleFun = () => {
    console.log(
    '%c%s%c%s%c%s', 
    style.title, 
    `
    ERNI
    `,
    style.warning, 
    `
Frontend Community: Webpack 2`,
    style.normal,
    `


    SME: Bernat Martínez Vidal
    Repo: https://github.com/bernatmv/webpack-2-workshop-material.git
    

    `);
};

const consolePro = (text) => {
    console.log(
        '%c%s%c%s%c%s', 
        style.exercice, 
        text
    );
};

export default consolePro;