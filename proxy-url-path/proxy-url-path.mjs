import { join } from 'path';

const baseStr = 'http://localhost:8080/api/v1/';
const pathStr = '/get/some/resources';

const baseUrl = new URL(baseStr);
const baseOrigin = baseUrl.origin;
const basePath = baseUrl.pathname;

const finalPath = join(basePath, pathStr).replace(/\\/g, '/');

const finalUrl = new URL(finalPath, baseOrigin).toString();

console.log({ finalUrl });

