import threading
import time

num = 0

def test1(cnt):
    global num
    for i in range(cnt):
        num+=1
    print("当前num的值为%d" % num) 

def test2(cnt):
    global num
    for i in range(cnt):
        num+=1
    print("当前num的值为%d" % num) 
    

def main():
    t1 = threading.Thread(target = test1,args = (10000000,))
    t2 = threading.Thread(target = test2,args = (10000000,))

    t1.start()
    t2.start()
    print("当前num的值为%d" % num) 

if __name__ == "__main__":
    main()
