def xor(x: int, y: int) -> int:
    return (x + y) % 2 

x, y = map(int, input().split())  
print(xor(x, y))  
