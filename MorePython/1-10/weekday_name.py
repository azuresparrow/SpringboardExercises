def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """
    dayPrefix = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"]
    if(day_of_week < 8 and day_of_week > 0):
        return dayPrefix[day_of_week-1]+"day"