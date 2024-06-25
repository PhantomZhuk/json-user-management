function getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            for (let el of res.data) {
                $(`.UsersContainer`).append(`
                        <div class="userItem">
                            <div class="userIconContainer">
                                <div class="userIcon">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                            <p><span class="greenColor"">Name</span>: ${el.name}</p>
                            <p><span class="greenColor"">User name</span>: ${el.username}</p>
                            <p><span class="greenColor"">Email</span>: ${el.email}</p>
                            <div class="addressBtn">
                                <p><span class="greenColor">Address</span></p>
                                <i class="fa-solid close fa-caret-down" id="addressBtn${el.id}"></i>
                            </div>
                            <div class="addressContainer" id="addressCon${el.id}">
                                <p><span class="greenColor"">Street</span>: ${el.address.street}</p> 
                                <p><span class="greenColor"">Suite</span>: ${el.address.suite}</p>
                                <p><span class="greenColor"">City</span>: ${el.address.city}</p>
                                <p><span class="greenColor"">Zipcode</span>: ${el.address.zipcode}</p>
                                <p><span class="greenColor"">geo</span>: lat: ${el.address.geo.lat} lng: ${el.address.geo.lng}</p>
                            </div>
                            <p><span class="greenColor"">Phone</span>: ${el.phone}</p>
                            <p><span class="greenColor"">Website</span>: ${el.website}</p>
                            <div class="companyBtn">
                                <p><span class="greenColor"">Company</span></p>
                                <i class="fa-solid close fa-caret-down" id="companyBtn${el.id}"></i>
                            </div>
                            <div class="companyContainer" id="companyCon${el.id}">
                                <p><span class="greenColor"">Street</span>: ${el.company.name}</p>
                                <p><span class="greenColor"">Suite</span>: ${el.company.catchPhrase}</p>
                                <p><span class="greenColor"">City</span>: ${el.company.bs}</p>
                            </div>
                        </div>
                `)
            }
        });
}

getUsers();

$(`.wrap`).click((e) => {
    if ((e.target.id).substring(0, 10) == `addressBtn`) {
        let ID = (e.target.id).substring(10);
        $(`#addressCon${ID}`).slideToggle()
        if ($(`#addressBtn${ID}`).hasClass(`close`)) {
            $(`#addressBtn${ID}`).removeClass(`close`);
            $(`#addressBtn${ID}`).addClass(`open`);
            $(`#addressBtn${ID}`).removeClass(`fa-caret-down`);
            $(`#addressBtn${ID}`).addClass(`fa-caret-up`);
        } else {
            $(`#addressBtn${ID}`).removeClass(`open`);
            $(`#addressBtn${ID}`).addClass(`close`);
            $(`#addressBtn${ID}`).removeClass(`fa-caret-up`);
            $(`#addressBtn${ID}`).addClass(`fa-caret-down`);
        }
    };
});

$(`.wrap`).click((e) => {
    if ((e.target.id).substring(0, 10) == `companyBtn`) {
        let ID = (e.target.id).substring(10);
        $(`#companyCon${ID}`).slideToggle()
        if ($(`#companyBtn${ID}`).hasClass(`close`)) {
            $(`#companyBtn${ID}`).removeClass(`close`);
            $(`#companyBtn${ID}`).addClass(`open`);
            $(`#companyBtn${ID}`).removeClass(`fa-caret-down`);
            $(`#companyBtn${ID}`).addClass(`fa-caret-up`);
        } else {
            $(`#companyBtn${ID}`).removeClass(`open`);
            $(`#companyBtn${ID}`).addClass(`close`);
            $(`#companyBtn${ID}`).removeClass(`fa-caret-up`);
            $(`#companyBtn${ID}`).addClass(`fa-caret-down`);
        }
    };
});

$(`.addUsersContainer`).hide();

$(`#openUsersConatiner`).click(() => {
    $(`.addUsersContainer`).show();
});

$(`.namePlaceholder`).click(() => {
    $(`#nameInput`).focus();
});

$(`#nameInput`).focus(() => {
    $(`.namePlaceholder`).css({
        'margin': '0 0 35px 7px',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#nameInput`).blur(() => {
    if ($(`#nameInput`).val().length < 1) {
        $(`.namePlaceholder`).css({
            'margin': '0 20px',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.userNamePlaceholder`).click(() => {
    $(`#userNameInput`).focus();
});

$(`#userNameInput`).focus(() => {
    $(`.userNamePlaceholder`).css({
        'margin': '0 0 35px 187px',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#userNameInput`).blur(() => {
    if ($(`#userNameInput`).val().length < 1) {
        $(`.userNamePlaceholder`).css({
            'margin': '0 0 0 200px',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.emailPlaceholder`).click(() => {
    $(`#emailInput`).focus();
});

$(`#emailInput`).focus(() => {
    $(`.emailPlaceholder`).css({
        'margin': '63px 265px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#emailInput`).blur(() => {
    if ($(`#emailInput`).val().length < 1) {
        $(`.emailPlaceholder`).css({
            'margin': '80px 260px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.phonePlaceholder`).click(() => {
    $(`#phoneInput`).focus();
});

$(`#phoneInput`).focus(() => {
    $(`.phonePlaceholder`).css({
        'margin': '123px 260px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#phoneInput`).blur(() => {
    if ($(`#phoneInput`).val().length < 1) {
        $(`.phonePlaceholder`).css({
            'margin': '140px 248px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.websitePlaceholder`).click(() => {
    $(`#websiteInput`).focus();
});

$(`#websiteInput`).focus(() => {
    $(`.websitePlaceholder`).css({
        'margin': '182px 250px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#websiteInput`).blur(() => {
    if ($(`#websiteInput`).val().length < 1) {
        $(`.websitePlaceholder`).css({
            'margin': '200px 238px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.companyNamePlaceholder`).click(() => {
    $(`#companyNameInput`).focus();
});

$(`#companyNameInput`).focus(() => {
    $(`.companyNamePlaceholder`).css({
        'margin': '0px 190px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#companyNameInput`).blur(() => {
    if ($(`#companyNameInput`).val().length < 1) {
        $(`.companyNamePlaceholder`).css({
            'margin': '20px 173px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.catchPhrasePlaceholder`).click(() => {
    $(`#catchPhraseInput`).focus();
});

$(`#catchPhraseInput`).focus(() => {
    $(`.catchPhrasePlaceholder`).css({
        'margin': '60px 212px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#catchPhraseInput`).blur(() => {
    if ($(`#catchPhraseInput`).val().length < 1) {
        $(`.catchPhrasePlaceholder`).css({
            'margin': '80px 195px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.bsPlaceholder`).click(() => {
    $(`#bsInput`).focus();
});

$(`#bsInput`).focus(() => {
    $(`.bsPlaceholder`).css({
        'margin': '120px 293px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#bsInput`).blur(() => {
    if ($(`#bsInput`).val().length < 1) {
        $(`.bsPlaceholder`).css({
            'margin': '140px 280px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});


$(`.streetPlaceholder`).click(() => {
    $(`#streetInput`).focus();
});

$(`#streetInput`).focus(() => {
    $(`.streetPlaceholder`).css({
        'margin': '0px 263px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#streetInput`).blur(() => {
    if ($(`#streetInput`).val().length < 1) {
        $(`.streetPlaceholder`).css({
            'margin': '20px 250px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.suitePlaceholder`).click(() => {
    $(`#suiteInput`).focus();
});

$(`#suiteInput`).focus(() => {
    $(`.suitePlaceholder`).css({
        'margin': '60px 273px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#suiteInput`).blur(() => {
    if ($(`#suiteInput`).val().length < 1) {
        $(`.suitePlaceholder`).css({
            'margin': '80px 260px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.cityPlaceholder`).click(() => {
    $(`#cityInput`).focus();
});

$(`#cityInput`).focus(() => {
    $(`.cityPlaceholder`).css({
        'margin': '120px 283px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#cityInput`).blur(() => {
    if ($(`#cityInput`).val().length < 1) {
        $(`.cityPlaceholder`).css({
            'margin': '140px 270px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.zipcodePlaceholder`).click(() => {
    $(`#zipcodeInput`).focus();
});

$(`#zipcodeInput`).focus(() => {
    $(`.zipcodePlaceholder`).css({
        'margin': '180px 252px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`#zipcodeInput`).blur(() => {
    if ($(`#zipcodeInput`).val().length < 1) {
        $(`.zipcodePlaceholder`).css({
            'margin': '200px 235px 0 0',
            'padding': '0',
            'font-size': '16px'
        })
    }
});

$(`.closeAddUsersCont`).click(() => {
    $(`.addUsersContainer`).hide();
});

let OpencompanyAddUserContainer = false;

$(`.companyAddUserContainer`).hide()

$(`.openCompanyContainer`).click(() => {
    if (OpencompanyAddUserContainer == false) {
        $(`.openCompanyContainer`).addClass(`fa-caret-up`);
        $(`.openCompanyContainer`).removeClass(`fa-caret-down`);
        OpencompanyAddUserContainer = true;
        $(`.addressAddUserContainer`).hide();
        $(`.openAddressContainer`).removeClass(`fa-caret-up`);
        $(`.openAddressContainer`).addClass(`fa-caret-down`);
        $(`.companyAddUserContainer`).show();
    } else {
        $(`.openCompanyContainer`).removeClass(`fa-caret-up`);
        $(`.openCompanyContainer`).addClass(`fa-caret-down`);
        OpencompanyAddUserContainer = false;
        $(`.companyAddUserContainer`).hide();
    }
})


let OpenaddressAddUserContainer = false;

$(`.addressAddUserContainer`).hide()

$(`.openAddressContainer`).click(() => {
    if (OpenaddressAddUserContainer == false) {
        $(`.openAddressContainer`).addClass(`fa-caret-up`);
        $(`.openAddressContainer`).removeClass(`fa-caret-down`);
        OpenaddressAddUserContainer = true;
        $(`.companyAddUserContainer`).hide();
        $(`.openCompanyContainer`).removeClass(`fa-caret-up`);
        $(`.openCompanyContainer`).addClass(`fa-caret-down`);
        $(`.addressAddUserContainer`).show()
    } else {
        $(`.openAddressContainer`).removeClass(`fa-caret-up`);
        $(`.openAddressContainer`).addClass(`fa-caret-down`);
        OpenaddressAddUserContainer = false;
        $(`.addressAddUserContainer`).hide()
    }
})

// let IP;

// axios.get(`https://api.ipify.org`)
//     .then(res => {
//         IP = res.data

//         axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=71a41c0317b3472da4e0ac6049f905c9&ip=${IP}`)
//             .then(res => {
//                 console.log(res.data.latitude)
//                 console.log(res.data.longitude)
//             });
//     });

