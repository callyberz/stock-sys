/* eslint-disable prefer-template */
export default (location, n) => {
  const half = location.split(n + '=')[1];
  // console.log(location)
  // console.log(decodeURIComponent(half.split('&')[0]))

  return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
};
