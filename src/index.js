import {moduleName as oneName} from './module-one';
import {moduleName as twoName} from './module-two';
import {moduleName as threeName} from './module-three';
import {moduleName as fourName} from './module-four';
import { log } from './utils';

export const run = () => {
    log(oneName);
    log(twoName);
    log(threeName);
    log(fourName);
}
