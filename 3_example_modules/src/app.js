import {bernatGreet} from './helpers/bernat';
import consolePro, {consoleFun} from './helpers/consoleFun';

import * as styles from './css/styles.less';

consoleFun();

const greeting = bernatGreet('Jorge');

console.log(styles);

debugger;

document.getElementById('root').innerHTML = greeting;

document.getElementById('root').className = styles.root;
