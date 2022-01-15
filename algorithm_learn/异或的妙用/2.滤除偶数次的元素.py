"""
②一个数组中有2种数出现奇数次(设为a和b),其他数都出现了偶数次,怎么找到这两个数
"""

test = [9,2,2,3,3,5,5,4,4,4]
# ****************1.滤除偶数次的元素拿到a^b***************
eor = 0     
for ele in test:
    eor ^= ele

# print(eor)
# 这里已经拿到了a^b, 现在要想办法把他俩分开
"""
由于a^b不是0,则肯定有一个二进制位他俩不相等
->找到最右侧的这一位,假设为i位,就可以构造出两个分类
    1.第i位为0
    2.第i位不为0
由于这两类中所有其他数都是偶数个,那么再次逐一对任意一类数进行异或就可以得到一个解
再利用已知的a^b就可以得到另一个解
"""

left_one = eor & (-eor) # 这个就是最右侧二进制位代表的十进制数
ans_1 = eor
for ele in test:
    if(ele & left_one != 0):
        ans_1 ^= ele

ans_2 = eor ^ ans_1
print(ans_1,ans_2)