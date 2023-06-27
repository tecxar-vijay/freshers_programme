const nUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


const signUp = (username, email, password) => {
    // const re = nUsers.map((userDe) => userDe.username)
    nUsers.forEach(element => {
        console.log(element);
        if (element.username == username) {
            alert("User Already Exist")
        } else {
            nUsers.push({ username: username, email: email, password: password })
            alert("User Signed in successfully")
            console.log(nUsers);
        }
    });

    //   if (re == username) {
    //     alert("User Already exist")
    //   }else{
    //     nUsers.push( {username: username,email : email,password :password})
    //     alert("User Signed in successfully")
    //     console.log(nUsers);
    //   }
}

// signUp("Thomas", "vijay@gmail.com", "vijay@123")

const signIn = (username, email, password) => {

    const u = nUsers.map((item) => item.username)
    if (u.includes(username)) {
        alert("Logged in successfully")
    } else {
        alert("User Not Found")
    }
    console.log(u);
}
// signIn("vijay","thomas@thomas.com","123333")


///////////Products

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

const rateProduct = (prodId, rate) => {
    const prodNum = { userId: prodId, rate: rate }
    const prod = products[1].ratings.push(prodNum)
    console.log(products);

}
rateProduct("aegfal", 4)


const averageRating = () => {

    const allrates = products.map((item) => item.ratings.map((item) => item.rate))
    const al = allrates.map(([item]) => item)
    console.log(al);

    const sum = al.reduce((a, b) => a + b, 0)
    const ave = sum / allrates.length || 0
    console.log(ave);
}
averageRating()

const likeProduct = () => {
    const like = products.map((item) => item.likes)
    console.log(like);
    const l = like.map(([i]) => i == undefined ? products[0].likes.push("fg12cy") : console.log("Alredy liked"))
}
likeProduct()
