/**
 * Return the next smallest multiple of @p x greater than @p i.
 *
 * If @p x is equal to zero then @p i is returned.
 * @param i The integer that the result must be larger than.
 * @param x The integer that the result is a multiple of.
 * @return The next smallest multiple of @p x.
 */
module.exports = function(i, x) {
	if (x === 0) return i;
	return (i / x + 1 | 0) * x;
};
