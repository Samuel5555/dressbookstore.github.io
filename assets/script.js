

// var shopperEmail = document.getElementById("shopperEmail").value;
// var shopperPhone = document.getElementById("shopperPhone").value;
// var shopperName1 = document.getElementById("shopperFirstName").value;
// var shopperName2 = document.getElementById("shopperLastName").value;
// var shopperAddress = document.getElementById("shopperAddress").value;

// var Total = parseInt(getTotalPrice) * 100;

    // var shopperEmail = prompt("Please enter your Email address. Ensure it is correct shopperName = prompt("Please enter your Full name. Ensure it is correct")
    // var shopperPhone = prompt("Please enter your Phone number. Ensure it is correct")
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
    }
    return true;
   
}
    
function prepareCheckout(){
  document.getElementById("paymentForm").style.display = "block";
}

var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
    e.preventDefault();
    var email = document.getElementById("email-address").value;
    var getTotalPrice = document.getElementById("totalPrice").innerHTML;
    var amount = parseInt(getTotalPrice) * 100;;
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var phonenumber = document.getElementById("phone-number").value;
    var address = document.getElementById("address").value;
    var products = document.getElementById("cart-table").childNodes;
    for(let x = 0; x<products.length; x++){
        list = products[x].innerHTML;
        console.log(list);
    
    }
    
    if(email && amount){
        var handler = PaystackPop.setup({
            key: 'pk_live_da3fadaa0fb61eac75467f21e84dcdcaa432673c',
            email: email,
            amount: amount,
            firstname: firstname + lastname,
            lastname: list,
            label: phonenumber + email,
            phone: phonenumber,
            metadata: {
                custom_fields: [
                   {
                       display_name: "Mobile Number",
                       variable_name: "mobile_number",
                       value: phonenumber
                   },
                   {
                       display_name: "Address",
                       variable_name: "address",
                       value: address
                   },
                ]
             },

            callback: function (response){
                alert('Success. transaction ref is ' + response + '. You would be contacted once your delivery comes in line.');

            },
            onClose: function(){
                alert('Transaction cancelled');

            }
        });
        handler.openIframe();
    }
    else{
        alert('All fields are required')
    }
    
}
function prepareAllAnswers(){
    prepareAnswer1();
    prepareAnswer2();
    prepareAnswer3();
    prepareAnswer4();
    prepareAnswer5();
    prepareAnswer6();
    prepareAnswer7();
    prepareAnswer8();
    prepareAnswer9();
    prepareAnswer10();
    prepareAnswer11();
    prepareAnswer12();
    prepareAnswer13();
    prepareAnswer14();
    prepareAnswer15();
    prepareAnswer16();
    prepareAnswer17();
    prepareAnswer18();
    prepareAnswer19();
}

function prepareAnswer1(){
    document.getElementById("showAnswer1").onclick = function(){
        if(document.getElementById("showAnswer1").checked){
            document.getElementById("answer1").style.display = "block";
        }else{
            document.getElementById("answer1").style.display = "none";
        }
    }
    document.getElementById("answer1").style.display = "none";
} 
function prepareAnswer2(){
    document.getElementById("showAnswer2").onclick = function(){
        if(document.getElementById("showAnswer2").checked){
            document.getElementById("answer2").style.display = "block";
        }else{
            document.getElementById("answer2").style.display = "none";
        }
    }
    document.getElementById("answer2").style.display = "none";
} 
function prepareAnswer3(){
    document.getElementById("showAnswer3").onclick = function(){
        if(document.getElementById("showAnswer3").checked){
            document.getElementById("answer3").style.display = "block";
        }else{
            document.getElementById("answer3").style.display = "none";
        }
    }
    document.getElementById("answer3").style.display = "none";
} 
function prepareAnswer4(){
    document.getElementById("showAnswer4").onclick = function(){
        if(document.getElementById("showAnswer4").checked){
            document.getElementById("answer4").style.display = "block";
        }else{
            document.getElementById("answer4").style.display = "none";
        }
    }
    document.getElementById("answer4").style.display = "none";
} 
function prepareAnswer5(){
    document.getElementById("showAnswer5").onclick = function(){
        if(document.getElementById("showAnswer5").checked){
            document.getElementById("answer5").style.display = "block";
        }else{
            document.getElementById("answer5").style.display = "none";
        }
    }
    document.getElementById("answer5").style.display = "none";
} 
function prepareAnswer6(){
    document.getElementById("showAnswer6").onclick = function(){
        if(document.getElementById("showAnswer6").checked){
            document.getElementById("answer6").style.display = "block";
        }else{
            document.getElementById("answer6").style.display = "none";
        }
    }
    document.getElementById("answer6").style.display = "none";
} 
function prepareAnswer7(){
    document.getElementById("showAnswer7").onclick = function(){
        if(document.getElementById("showAnswer7").checked){
            document.getElementById("answer7").style.display = "block";
        }else{
            document.getElementById("answer7").style.display = "none";
        }
    }
    document.getElementById("answer7").style.display = "none";
} 
function prepareAnswer8(){
    document.getElementById("showAnswer8").onclick = function(){
        if(document.getElementById("showAnswer8").checked){
            document.getElementById("answer8").style.display = "block";
        }else{
            document.getElementById("answer8").style.display = "none";
        }
    }
    document.getElementById("answer8").style.display = "none";
} 
function prepareAnswer9(){
    document.getElementById("showAnswer9").onclick = function(){
        if(document.getElementById("showAnswer9").checked){
            document.getElementById("answer9").style.display = "block";
        }else{
            document.getElementById("answer9").style.display = "none";
        }
    }
    document.getElementById("answer9").style.display = "none";
} 
function prepareAnswer10(){
    document.getElementById("showAnswer10").onclick = function(){
        if(document.getElementById("showAnswer10").checked){
            document.getElementById("answer10").style.display = "block";
        }else{
            document.getElementById("answer10").style.display = "none";
        }
    }
    document.getElementById("answer10").style.display = "none";
} 
function prepareAnswer11(){
    document.getElementById("showAnswer11").onclick = function(){
        if(document.getElementById("showAnswer11").checked){
            document.getElementById("answer11").style.display = "block";
        }else{
            document.getElementById("answer11").style.display = "none";
        }
    }
    document.getElementById("answer11").style.display = "none";
} 
function prepareAnswer12(){
    document.getElementById("showAnswer12").onclick = function(){
        if(document.getElementById("showAnswer12").checked){
            document.getElementById("answer12").style.display = "block";
        }else{
            document.getElementById("answer12").style.display = "none";
        }
    }
    document.getElementById("answer12").style.display = "none";
} 
function prepareAnswer13(){
    document.getElementById("showAnswer13").onclick = function(){
        if(document.getElementById("showAnswer13").checked){
            document.getElementById("answer13").style.display = "block";
        }else{
            document.getElementById("answer13").style.display = "none";
        }
    }
    document.getElementById("answer13").style.display = "none";
} 
function prepareAnswer14(){
    document.getElementById("showAnswer14").onclick = function(){
        if(document.getElementById("showAnswer14").checked){
            document.getElementById("answer14").style.display = "block";
        }else{
            document.getElementById("answer14").style.display = "none";
        }
    }
    document.getElementById("answer14").style.display = "none";
} 
function prepareAnswer15(){
    document.getElementById("showAnswer15").onclick = function(){
        if(document.getElementById("showAnswer15").checked){
            document.getElementById("answer15").style.display = "block";
        }else{
            document.getElementById("answer15").style.display = "none";
        }
    }
    document.getElementById("answer15").style.display = "none";
} 
function prepareAnswer16(){
    document.getElementById("showAnswer16").onclick = function(){
        if(document.getElementById("showAnswer16").checked){
            document.getElementById("answer16").style.display = "block";
        }else{
            document.getElementById("answer16").style.display = "none";
        }
    }
    document.getElementById("answer16").style.display = "none";
} 
function prepareAnswer17(){
    document.getElementById("showAnswer17").onclick = function(){
        if(document.getElementById("showAnswer17").checked){
            document.getElementById("answer17").style.display = "block";
        }else{
            document.getElementById("answer17").style.display = "none";
        }
    }
    document.getElementById("answer17").style.display = "none";
} 
function prepareAnswer18(){
    document.getElementById("showAnswer18").onclick = function(){
        if(document.getElementById("showAnswer18").checked){
            document.getElementById("answer18").style.display = "block";
        }else{
            document.getElementById("answer18").style.display = "none";
        }
    }
    document.getElementById("answer18").style.display = "none";
} 
function prepareAnswer19(){
    document.getElementById("showAnswer19").onclick = function(){
        if(document.getElementById("showAnswer19").checked){
            document.getElementById("answer19").style.display = "block";
        }else{
            document.getElementById("answer19").style.display = "none";
        }
    }
    document.getElementById("answer19").style.display = "none";
} 


function CheckPassword(){ 
    var example = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?!.*\s).{8,50}$/;  
    var pwd1 = document.getElementById("pwd1");  
    if (pwd1.value.match(example)){
        return true;
    }
    else{
        alert("Use a Stronger password. Passwords should be at least 8 characters long and contain at least one numeric digit, one lowercase letter, one uppercase letter and one special charcter");
        return false;
    }
}
function error(){
    alert("Something went wrong. Please, Try again later");
    window.location = 'home.html';
}
function validate(){
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    if(pwd1.value == pwd2.value){
        return true;
    }
    else{
        alert("Passwords did not match.\nTry again and make sure the confirmed password is the same with your password");
        return false;
    }
   
}

function passwordStyle(){
    alert("Strong password is required. Passwords should  be at least 8 characters long and contain at least one numeric digit, one lowercase letter, one uppercase letter and one special charcter");
}










// /* Set rates + misc */
// var taxRate = 0.05;
// var shippingRate = 15.00; 
// var fadeTime = 300;

// setInterval(changeImage, 5000)
/*
=====> Checking browser support.
 //This function might be redundant because most modern browsers do support HTML5.
 */

//  function CheckBrowser() {
//     if ('localStorage' in window && window['localStorage'] !== null) {
//         // We can use localStorage object to store data.
//         return true;
//     } else {
//             return false;
//     }
// }

// // function RemoveItem()
// // {
// // var name=document.forms.ShoppingList.name.value;
// // document.forms.ShoppingList.data.value=localStorage.removeItem(name);
// // doShowAll();
// // }
// //add new key=>value to the HTML5 storage
// function SaveItem() {
//     name = document.getElementById("product-name").innerHTML;
// 	var data = document.getElementById("product-price").innerHTML;
//     var image = document.getElementById("product-image").innerHTML;		
    
//     localStorage.setItem(image, data);
// 	doShowAll();
	
// }
// //------------------------------------------------------------------------------
// //change an existing key=>value in the HTML5 storage
// // function ModifyItem() {
// // 	var name1 = document.forms.ShoppingList.name.value;
// // 	var data1 = document.forms.ShoppingList.data.value;
// // 	//check if name1 is already exists
	
// // //check if key exists
// // 			if (localStorage.getItem(name1) !=null)
// // 			{
// // 			  //update
// // 			  localStorage.setItem(name1,data1);
// // 			  document.forms.ShoppingList.data.value = localStorage.getItem(name1);
// // 			}
		
	
// // 	doShowAll();
// // }
// // //-------------------------------------------------------------------------
// //delete an existing key=>value from the HTML5 storage
// // function RemoveItem() {
// // 	var name = document.getElementById("product-name").innerHTML;
// // 	document.getElementById("product-price").innerHTML = localStorage.removeItem(name);
// // 	doShowAll();
// // }
// //-------------------------------------------------------------------------------------
// //restart the local storage
// function ClearAll() {
// 	localStorage.clear();
// 	doShowAll();
// }
// //--------------------------------------------------------------------------------------
// // dynamically populate the table with shopping list items
// //below step can be done via PHP and AJAX too. 
// function doShowAll() {
// 	if (CheckBrowser()) {
//         var key = "";
//         var QTY = 1;
//         var list = "<thead><tr><th>Image</th><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Remove</th></tr></thead>\n";
// 		var i = 0;
// 		//for more advance feature, you can set cap on max items in the cart
// 		for (i = 0; i <= localStorage.length-1; i++) {
// 			key = localStorage.key(i);
// 			list += "<tbody><tr><td>" + key + "</td>\n<td>" + name + "</td>\n<td>" + localStorage.getItem(key) + "</td>\n<td class= 'product-line-price'>" + QTY + "</td>\n<td>"
// 					+ localStorage.getItem(key) + "</td>\n<td><button class='remove-product' onclick='removeItem()'>Remove</button></td></tr>\n";
// 		}
// 		//if no item exists in the cart
// 		if (list == "<thead><tr><th>Image</th><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Remove</th></tr></thead>\n") {
// 			list += "<tbody><tr><td><i>Nothing has been added to cart</i></td><td></td><td></td><td></td><td></td><td></td></tr></tbody>\n";
// 		}
// 		//bind the data to html table
// 		//you can use jQuery too....
// 		document.getElementById('list').innerHTML = list;
// 		recalculateCart();
// 	} else {
// 		alert('Cannot save shopping list as your browser does not support HTML 5');
// 	}
// }

// /*
//  =====> Checking the browser support
//  //this step may not be required as most of modern browsers do support HTML5
//  */
//  //below function may be redundant
// function CheckBrowser() {
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		// we can use localStorage object to store data
// 		return true;
// 	} else {
// 			return false;
// 	}
// }
// //-------------------------------------------------
// /*
// You can extend this script by inserting data to database or adding payment processing API to shopping cart..
// *///add new key=>value to the HTML5 storage



// /* Assign actions */
// // $('.product-quantity input').change( function() {
// //   updateQuantity(this);
// // });

// $('.product-removal button').click( function() {
//   removeItem(this);
// });


// /* Recalculate cart */
// function recalculateCart()
// {
//   var subtotal = 0;
  
//   /* Sum up row totals */
//   $('#product-price').each(function () {
//     subtotal += parseFloat($('#product-price').text());
//   });
  
//   /* Calculate totals */
//   var tax = subtotal * taxRate;
//   var shipping = (subtotal > 0 ? shippingRate : 0);
//   var total = subtotal + tax + shipping;
  
//   /* Update totals display */
//   $('.totals-value').fadeOut(fadeTime, function() {
//     $('#cart-subtotal').html(subtotal.toFixed(2));
//     $('#cart-tax').html(tax.toFixed(2));
//     $('#cart-shipping').html(shipping.toFixed(2));
//     $('#cart-total').html(total.toFixed(2));
//     if(total == 0){
//       $('.checkout').fadeOut(fadeTime);
//     }else{
//       $('.checkout').fadeIn(fadeTime);
//     }
//     $('.totals-value').fadeIn(fadeTime);
//   });
// }


// /* Update quantity */
// // function updateQuantity(quantityInput)
// // {
// //   /* Calculate line price */
// //   var productRow = $(quantityInput).parent().parent();
// //   var price = parseFloat(productRow.children('.product-price').text());
// //   var quantity = $(quantityInput).val();
// //   var linePrice = price * quantity;
  
// //   /* Update line price display and recalc cart totals */
// //   productRow.children('.product-line-price').each(function () {
// //     $(this).fadeOut(fadeTime, function() {
// //       $(this).text(linePrice.toFixed(2));
// //       recalculateCart();
// //       $(this).fadeIn(fadeTime);
// //     });
// //   });  
// // }


// /* Remove item from cart */
// function removeItem(removeButton)
// {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//   });
// }