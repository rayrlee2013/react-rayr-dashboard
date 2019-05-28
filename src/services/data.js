/**
 * Created by Rayr Lee on 2019-02-22.
 */

import $_ajax from './ajax';

export const cityData = (params) => $_ajax.get(`/v1/cities`, params);
