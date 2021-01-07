        var num1 = parseInt(prompt("첫 번째 숫자 : "));
        var num2 = parseInt(prompt("두 번째 숫자 : "));
        addNumber(num1,num2);
       
        function addNumber(a,b) {
                var sum = a + b;
                 alert("두 수를 더한 값은 " + sum + "입니다.");
        }   