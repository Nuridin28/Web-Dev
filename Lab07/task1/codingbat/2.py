def string_times(str, n):
    return str * n

def front_times(str, n):
    return (str[:3] if len(str) > 2 else str) * n

def string_bits(str):
    return str[::2]

def string_splosion(str):
    return "".join(str[:i+1] for i in range(len(str)))

def last2(str):
    if len(str) < 2:
        return 0
    last2 = str[-2:]
    return sum(1 for i in range(len(str)-2) if str[i:i+2] == last2)

def array_count9(nums):
    return nums.count(9)

def array_front9(nums):
    return 9 in nums[:4]

def array123(nums):
    return any(nums[i:i+3] == [1, 2, 3] for i in range(len(nums) - 2))

def string_match(a, b):
    return sum(1 for i in range(min(len(a), len(b)) - 1) if a[i:i+2] == b[i:i+2])

def string_x(str):
    return str[0] + str[1:-1].replace("x", "") + str[-1] if len(str) > 1 else str
