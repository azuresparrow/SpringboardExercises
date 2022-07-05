def print_upper_words(words, must_start_with={"e"}):
    """Prints out a list of words one on each line converting all to uppercase
        by default it will only print words that start with e, but that can be changed with the second parameter

        - words: a list of words
        - must_start_with: a list of characters the word must start with, ignores case
        
    """
    for word in words:
        #
        first_char = word[0]
        if(first_char.lower() in must_start_with or first_char.upper() in must_start_with):
            print(word.upper())


# this should print "HELLO", "HEY", "YO", and "YES"
print_upper_words(["ehello", "ehey", "goodbye", "Eyo", "yes"])

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})