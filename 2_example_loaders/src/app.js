import {bernatGreet} from './helpers/bernat';
import consolePro, {consoleFun} from './helpers/consoleFun';

import './css/styles.less';

consoleFun();

const greeting = bernatGreet('Jorge');

consolePro(greeting);
document.getElementById('root').innerHTML = greeting;