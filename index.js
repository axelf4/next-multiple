/**
 * Return the next smallest multiple of @p x greater than @p i.
 *
 * @param i The integer that the result must be larger than.
 * @param x The integer that the result is a multiple of.
 * @return The next smallest multiple of @p x.
 */
module.exports = function(i, x) {
	return (i / x + 1) * x;
};
