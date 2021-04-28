//VARIABLES
const API_URL = 'https://randomuser.me/api?results=50';
const main = document.getElementById('main');
const loadMore = document.getElementById("loadmore");
var maxItem = 3;
var loadItem = 3;
var hiddenClass = 'hiddenStyle';
var hiddenItems = Array.from(document.querySelectorAll('.hiddenStyle'));
var items = [];
//CALL FUNCTION
getCustomer(API_URL);
//FUNCTIONS
window.onload = function () {

}

async function getCustomer(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.dir(data.results);
    showCustomer(data.results);
    hiddenEle(items);
    const customerItem = document.getElementsByClassName('customer');

}

async function showCustomer(customers) {
    main.innerHTML = '';
    main.innerHTML = ' <h1>LIST CUSTOMERS</h1>'
    customers.forEach(customer => {
        const name = customer.name.title + "." + customer.name.first + " " + customer.name.last;
        const { email, phone, gender } = customer;
        const img = customer.picture.thumbnail;
        const location = customer.location.country;
        const customerEle = document.createElement('div');
        customerEle.classList.add('customer');
        customerEle.innerHTML = `
        <img class="avatar" src="${img}">
        <h3>${name}</h3>
        <div class="customer-info">
            <h4>${email}</h4>
            <h4>${phone}</h4>
            <h4>${gender}</h4>
            <h4>${location}</h4>
        </div>
        `
        const customerDiv = document.getElementsByClassName('')
        customerEle.setAttribute('onclick', 'showInfo()');
        items.push(customerEle);
        main.appendChild(customerEle);
    });
    // const btnLoadMore = document.createElement('button');
    // btnLoadMore.innerText = 'Load More';
    // btnLoadMore.setAttribute('id', 'loadmore');
    // main.appendChild(btnLoadMore);
};

function hiddenEle(items){
    items.forEach(function (item, index) {
        // console.log(item, index);
        if (index > maxItem - 1) {
            item.classList.add(hiddenClass);
        }
    });
}

function showInfo(e){
    e.classList.add('active');
}

loadMore.addEventListener("click", function () {
    console.log("ok");
    [].forEach.call(document.querySelectorAll("." + hiddenClass), function (item, index) {
        if (index < loadItem) {
            item.classList.remove(hiddenClass);
        }
        if (document.querySelectorAll("." + hiddenClass).length === 0) {
            loadMore.style.display = "none";
        }
    });
});

var x = 10;