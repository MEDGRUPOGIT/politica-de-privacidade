import { uuid } from "./uuid";

const setKey = (key: string, value: string) => {
  localStorage.setItem(key, value);
  return getValueFormatted();
}
const getKey = (key: string): string => localStorage.getItem(key);
const getHost = () => window.location.host || uuid();
const getValue = () => `mpp:${uuid()}:${Date.now().toString()}`;
const getValueFormatted = () => {
  const [slug, uuid, timestamp] = getValue().split(':');
  return { slug, uuid, timestamp };
}

export {
  setKey,
  getKey,
  getHost,
  getValue,
  getValueFormatted
};
