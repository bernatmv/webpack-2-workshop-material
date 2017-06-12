import {bernatGreet} from './helpers/bernat';
import consolePro, {consoleFun} from './helpers/consoleFun';

import * as styles from './css/styles.less';

consoleFun();

const greeting = bernatGreet('Jorge');

document.getElementById('root').innerHTML = greeting; // eslint-disable-line
document.getElementById('root').className = styles.root; // eslint-disable-line
