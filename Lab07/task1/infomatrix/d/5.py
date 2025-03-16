N = int(input())  
arr = list(map(int, input().split()))  

found = any(arr[i] * arr[i - 1] > 0 for i in range(1, N))

print("YES" if found else "NO")  
