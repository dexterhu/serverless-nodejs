## To run unit test
```
npm install
npm test
```
Sample output:
```
> transurban@1.0.0 test /Users/dexterhu/interview/transurban
> mocha



  Pair
    Calculate number of mataching pairs from an array of numbers
      ✓ should return 0 for empty array
      ✓ should return 0 for array with only one element
      ✓ should return 3 for sample input [10, 20, 20, 10, 10, 30, 50, 10, 20]
      ✓ should return 4 for an array of 8 of the same number
      ✓ should return 4 for an array of 9 of the same number
      ✓ should work for an array with float numbers that have the same numeric value


  6 passing (7ms)
```

## To test against deployed url without API key
```
curl -H "Content-Type:application/json" \
-X POST https://t0xclddayd.execute-api.us-east-1.amazonaws.com/dev/pairs \
-d '{"array":[10, 20, 20, 10, 10, 30, 50, 10, 20]}'
```
Response is:
```
{"message":"Forbidden"}
```

## To test against deployed url with API key, please replace XXXXXXXXXXXXXXXXXXXXXXXXXX with a real key
```
curl -H "Content-Type:application/json" \
-H "x-api-key:XXXXXXXXXXXXXXXXXXXXXXXXXX" \
-X POST https://t0xclddayd.execute-api.us-east-1.amazonaws.com/dev/pairs \
-d '{"array":[10, 20, 20, 10, 10, 30, 50, 10, 20]}'
```
Response is:
```
{"message":"The number of matching pair from [10,20,20,10,10,30,50,10,20] is 3"}
```