def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    result = {}
    for num in nums:
        if num not in result :
            result[num] = nums.count(num)
    maximumCount = max(result.values())
    for (key, val) in result.items():
        if(val == maximumCount):
            return key
