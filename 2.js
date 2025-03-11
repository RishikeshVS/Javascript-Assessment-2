var arr=[5,10,15,20,22,23];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        arr[i]=0;
    }
}
console.log("The Array,after replacing the odd numbers with 0:")
console.log(arr);