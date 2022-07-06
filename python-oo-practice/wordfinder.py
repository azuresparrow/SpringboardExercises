"""Word Finder: finds random words from a dictionary."""
from fileinput import filename
import random

class WordFinder:
    """creates a word finder from the file passed in, and then prints how many words it read"""
    def __init__(self, file_name):
        file = open(file_name)
        self.words = self.parse(file)
        print(f"{len(self.words)} words read")
    
    """Returns a random word from the list"""
    def random(self):
        return random.choice(self.words)

    """How words are parsed from file, split out so it can be replaced in subclasses"""
    def parse(self, file):
        return [w.strip() for w in file.readlines()]
        
class SpecialWordFinder(WordFinder):
    """A special version of wordfinder that can ignore blank lines and comments"""
    
    """replaces the default parse that ignores comments and blank lines"""
    def parse(self, file):
        return [w.strip() for w in file.readlines() if w.strip() and not w.startswith("#")]