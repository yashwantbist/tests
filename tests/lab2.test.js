
//import 
const {
    add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

//describe is like folder 
//test is actual test. stms it aka test
const {describe, test } = require("node:test");
const assert = require("node:assert");


//suite and tests
describe("Lab-TDD tests", ()=> {
    
    //1.add function
    describe("Add function tests", ()=>{
 //description of test
 //first part = functionadd(3,5)
 //second part = expected part 8
 //strictEqual aka ===
 test("Add Function should return 8 when adding 5", () => {
    assert.strictEqual(add(3,5), 8)
 })
 

 test("Add function should return 8 when adding 5 and 3", ()=>{
    assert.strictEqual(add(-5, 5), 0)
 });
    })
  

    //2.subtract functions
    describe("Subtract function tests", ()=>{
        test("Subtract function should return 2 when subtracting 5 from 3", ()=>{
            assert.strictEqual(subtract(5,3), 2)
        })
    })

    //3.multiply function tests
    describe("Multiply function tests", ()=>{
        test("Multiply function should return 12 when multiplying 4 and 3", ()=>{
            assert.strictEqual(multiply(4,3), 12)
        })
    })

    //4. divide function
    describe("divide function test", ()=>{
         test("Divide function should return 4 when dividing 32 over 8", ()=>{
            assert.strictEqual(divide(32, 8), 4)
         });
         test("Zero division should throw an error",()=>{
            assert.throws(()=> divide(10,0), Error)
         })
        
    })

    //5.modulas function test
    describe("Modulas function test", ()=>{
        test("Modulas function should return 1 when 17 is divided by 4", ()=>{
            assert.strictEqual(modulas(17,4), 1)
        })
    })
    //6.power function test
    describe("Power function test", ()=>{
        test("Power function should return 16 when 2 is raised to the power of 4", ()=>{
            assert.strictEqual(power(2,4), 16)
        })
    })
    //7.squareroot function tests
    describe("Squareroot function test",()=>{
        test("Squareroot function should return 4 when 16 is squaredrooted", ()=>{
            assert.strictEqual(squareRoot(16), 4)
        })
    })
    //8.floor function tests
    describe("floor function test",()=>{
        test("Floor function should return 15 when 15.5 is floored", ()=>{
            assert.strictEqual(floor(15.5),15 )
        })
    })
    //9.ceiling function tests
    describe("ceiling function test",()=>{
        test("ceiling function should return 15 when 15.3 is floored", ()=>{
            assert.strictEqual(ceiling(15.3),16 )
        })
    })
})




