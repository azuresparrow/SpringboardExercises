"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        """Initialize the serializer, with an optional starting value given that defaults to 0"""
        self.start = self.next = start
    
    def __repr__(self):
        """returns a represenation of the generator"""
        return f"<Serial Generator - start={self.start} // next={self.next}"

    def generate(self):
        """returns the next generated value"""
        self.next += 1
        return self.next - 1 

    def reset(self):
        """resets the next value back to the initialized start value"""
        self.next = self.start
    
