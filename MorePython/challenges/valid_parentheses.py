def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    unmatched = 0
    for letter in parens:
        if letter == "(":
            unmatched += 1
        if letter == ")":
            unmatched -= 1
        if unmatched < 0:
            return False
    return unmatched == 0