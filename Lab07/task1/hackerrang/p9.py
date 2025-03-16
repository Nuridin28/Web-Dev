N = int(input())
my_list = []
for _ in range(N):
    command = input().split()
    operation = command[0]

    if operation == "insert":
        my_list.insert(int(command[1]), int(command[2]))
    elif operation == "print":
        print(my_list)
    elif operation == "remove":
        my_list.remove(int(command[1]))
    elif operation == "append":
        my_list.append(int(command[1]))
    elif operation == "sort":
        my_list.sort()
    elif operation == "pop":
        my_list.pop()
    elif operation == "reverse":
        my_list.reverse()