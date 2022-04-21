import * as pkijs from 'pkijs';
import TimestampedEntry from './TimestampedEntry.js';
import CertHelper from "./CertHelper";

export default class LeafHash {
    constructor(hash) {
        this.hash = hash;
    }
}