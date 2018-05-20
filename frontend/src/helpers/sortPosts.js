import sortBy from 'sort-by';

/**
  * @description Sort all posts based on most voted or most recent
  * @param {array} posts - The array os post objects
  * @param {String} orderByTarget - The string containing which type of sort it is (voteScore or date)
  */
export function sortPosts(posts, orderByTarget) {
  return posts.sort(sortBy(`-${orderByTarget}`))
}
