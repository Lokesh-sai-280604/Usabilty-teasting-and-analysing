let ratings = [];

function savePlan(){

let product=document.getElementById("product").value;
let goal=document.getElementById("goal").value;
let scenario=document.getElementById("scenario").value;

document.getElementById("plans").innerHTML=`

<h3>Test Plan</h3>

<p><b>Product:</b> ${product}</p>

<p><b>Goal:</b> ${goal}</p>

<p><b>Scenario:</b> ${scenario}</p>

`;

alert("Test Plan Saved");

}

function addFeedback(){

let user=document.getElementById("username").value;

let rating=parseInt(document.getElementById("rating").value);

let observation=document.getElementById("observation").value;

let suggestion=document.getElementById("suggestion").value;

if(user=="" || isNaN(rating))
{
alert("Fill all required fields");
return;
}

ratings.push(rating);

let table=document.getElementById("feedbackTable");

table.innerHTML+=`

<tr>

<td>${user}</td>

<td>${rating}</td>

<td>${observation}</td>

<td>${suggestion}</td>

</tr>

`;

let avg=ratings.reduce((a,b)=>a+b,0)/ratings.length;

document.getElementById("average").innerHTML=
"Average Usability Score : "+avg.toFixed(2)+" / 5";

document.getElementById("username").value="";
document.getElementById("rating").value="";
document.getElementById("observation").value="";
document.getElementById("suggestion").value="";

}