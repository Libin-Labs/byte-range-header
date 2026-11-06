import * as api from '@lp-labs/byte-range-header';
import { formatByteRange } from '@lp-labs/byte-range-header';
console.log(formatByteRange(0, 499));
// @ts-expect-error invalid argument must be rejected by declarations
api.formatByteRange('0', 4);
