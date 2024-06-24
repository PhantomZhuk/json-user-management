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
        if ($(`#addressBtn${ID}`).hasClass(`close`)){
            $(`#addressBtn${ID}`).removeClass(`close`);
            $(`#addressBtn${ID}`).addClass(`open`);
            $(`#addressBtn${ID}`).removeClass(`fa-caret-down`);
            $(`#addressBtn${ID}`).addClass(`fa-caret-up`);
        }else {
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
        if ($(`#companyBtn${ID}`).hasClass(`close`)){
            $(`#companyBtn${ID}`).removeClass(`close`);
            $(`#companyBtn${ID}`).addClass(`open`);
            $(`#companyBtn${ID}`).removeClass(`fa-caret-down`);
            $(`#companyBtn${ID}`).addClass(`fa-caret-up`);
        }else {
            $(`#companyBtn${ID}`).removeClass(`open`);
            $(`#companyBtn${ID}`).addClass(`close`);
            $(`#companyBtn${ID}`).removeClass(`fa-caret-up`);
            $(`#companyBtn${ID}`).addClass(`fa-caret-down`);
        }
    };
});

$(`.addUsersContainer`).hide();

$(`#addUsers`).click(()=>{
    $(`.addUsersContainer`).show();
});

$(`.namePlaceholder`).click(()=>{
    $(`#nameInput`).focus();
});

$(`#nameInput`).focus(()=>{
    $(`.namePlaceholder`).css({
        'margin': '0 0 35px 7px',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.userNamePlaceholder`).click(()=>{
    $(`#userNameInput`).focus();
});

$(`#userNameInput`).focus(()=>{
    $(`.userNamePlaceholder`).css({
        'margin': '0 200px 35px 187px',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.emailPlaceholder`).click(()=>{
    $(`#emailInput`).focus();
});

$(`#emailInput`).focus(()=>{
    $(`.emailPlaceholder`).css({
        'margin': '63px 265px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.phonePlaceholder`).click(()=>{
    $(`#phoneInput`).focus();
});

$(`#phoneInput`).focus(()=>{
    $(`.phonePlaceholder`).css({
        'margin': '123px 260px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.websitePlaceholder`).click(()=>{
    $(`#websiteInput`).focus();
});

$(`#websiteInput`).focus(()=>{
    $(`.websitePlaceholder`).css({
        'margin': '182px 250px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});


$(`.companyNamePlaceholder`).click(()=>{
    $(`#companyNameInput`).focus();
});

$(`#companyNameInput`).focus(()=>{
    $(`.companyNamePlaceholder`).css({
        'margin': '280px 190px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.catchPhrasePlaceholder`).click(()=>{
    $(`#catchPhraseInput`).focus();
});

$(`#catchPhraseInput`).focus(()=>{
    $(`.catchPhrasePlaceholder`).css({
        'margin': '340px 215px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.bsPlaceholder`).click(()=>{
    $(`#bsInput`).focus();
});

$(`#bsInput`).focus(()=>{
    $(`.bsPlaceholder`).css({
        'margin': '400px 290px 0 0',
        'padding': '0 10px',
        'font-size': '14px'
    })
});

$(`.closeAddUsersCont`).click(()=>{
    $(`.addUsersContainer`).hide();
});