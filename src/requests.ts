import {take, takeRight} from 'lodash';

import {SanepidResponse} from "@/types";
import sanepidData from '@/response.json';

export function getSanepidData(): SanepidResponse {
  return sanepidData as any;
}
