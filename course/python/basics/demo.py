num=int(input("enter a number"))
reverse=0
while (num != 0) :
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num //= 10;

print ("reversed number is ",reverse)
  