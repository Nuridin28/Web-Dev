# sleepIn
def sleep_in(weekday, vacation):
    return not weekday or vacation

# monkeyTrouble
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

# sumDouble
def sum_double(a, b):
    return (a + b) * 2 if a == b else a + b

# diff21
def diff21(n):
    return abs(21 - n) * 2 if n > 21 else abs(21 - n)

# parrotTrouble
def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

# makes10
def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10

# nearHundred
def near_hundred(n):
    return abs(100 - n) <= 10 or abs(200 - n) <= 10

# posNeg
def pos_neg(a, b, negative):
    return (negative and a < 0 and b < 0) or (not negative and ((a < 0 < b) or (b < 0 < a)))

# notString
def not_string(s):
    return s if s.startswith("not") else "not " + s

# missingChar
def missing_char(s, n):
    return s[:n] + s[n+1:]

# frontBack
def front_back(s):
    return s if len(s) <= 1 else s[-1] + s[1:-1] + s[0]

# front3
def front3(s):
    front = s[:3]
    return front * 3