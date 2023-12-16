const categories =[
    {
        id:1,
        title:'Hats',
        imageUrl:'https://plus.unsplash.com/premium_photo-1675989087109-f8a00bfea7d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id:2,
        title:'Jackets',
        imageUrl:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id:3,
        title:'Sneakers',
        imageUrl:'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNuZWFrZXJzfGVufDB8fDB8fHww',
    },
    {
        id:4,
        title:'Mens',
        imageUrl:'https://media.istockphoto.com/id/1475597363/photo/two-happy-male-friends-carrying-shopping-bags-outdoors-in-city.jpg?s=612x612&w=0&k=20&c=rQpgyyE2lNX5Pu26ddXmHsMZRSfAFmMj5vco9ik2cHY=',
    },
    {
        id:5,
        title:'Womens',
        imageUrl:'https://media.istockphoto.com/id/1279548506/photo/young-woman-diwali-celebrate-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=X1wavNtpC41pPkzktOl9HLAEUmy4jKlQzXHLqw5bEUQ=',
    },
    
];

const PRODUCTS =[
    {
        id:1,
        name:'Brown Brim',
        imageUrl:'https://rowdykhats.com/cdn/shop/products/IMG_4921.jpg?v=1671312583&width=1946',
        price:80,
    
    },
    {
        id:2,
        name:'Blue Beanie',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8HFpbPg6bvk_q53D5nbyYORuyOJvKP89ow&usqp=CAU',
        price:100,
    
    },
    {
        id:3,
        name:'Brown Cowboy',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4Wb6pHy2vj63H-aOBDH-2hJFMr5LOgcgA&usqp=CAU',
        price:130,
    
    },
    {
        id:4,
        name:'Adidas NMD',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZ3uAssVAbbC8kJM8TWEG-2jgZxuWeSJ90Q&usqp=CAU',
        price:220,
    
    },
    {
        id:5,
        name:'Adidas Yeezy',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaR4jm6yfmkDqnwCfxTflOcJ30HCLFc_lng&usqp=CAU',
        price:450,
    
    },
    {
        id:6,
        name:'Black Jean Shearing',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfJQ-uD6Kbic1GVhrfWr-rxWjBrs9LEEoXg&usqp=CAU',
        price:120,
    
    },
    {
        id:7,
        name:'winter jackets',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKM8ZYXya45Cj78mF4qTRfn7mtu7-PUFvVw&usqp=CAU',
        price:450,
    
    },

    {
        id:8,
        name:'Sweetwear Tshirt',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAZ768dl41AjiL_uNYCt-tbmqItD_1Bk9ig&usqp=CAU',
        price:120,
    
    },
    {
        id:9,
        name:'Hooded Tshirts',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmkHXIDo18ML--knPuIdBXz6OMQ5YOJps0g&usqp=CAU',
        price:450,
    
    },

    {
        id:10,
        name:'Little Blossom',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Z8qsT46_Ak9t1ten5_4GGYCq9dt7S-2e6w&usqp=CAU',
        price:230,
    
    },
    {
        id:11,
        name:'Hooded Tshirts',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDo0u_Pbp7a54rhzyM7Mw060KVBTVL0O8DbZGH2QL7ppRxsfI8tkTTV43jla0oEvHKb0&usqp=CAU',
        price:320,
    
    },




]

const SHOP_DATA=[
    {
        title:'Hats',
        items:[
            {
                id:1,
                name:'Gray Brim',
                imageUrl:'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhdHN8ZW58MHx8MHx8fDA%3D',
                price:100,
            
            },
            {
                id:2,
                name:'Blue Beanie',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8HFpbPg6bvk_q53D5nbyYORuyOJvKP89ow&usqp=CAU',
                price:150,
            
            },
            {
                id:3,
                name:'Brown Cowboy',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4Wb6pHy2vj63H-aOBDH-2hJFMr5LOgcgA&usqp=CAU',
                price:180,
            
            },

            {
                id:8,
                name:'Brown Hat',
                imageUrl:'https://media.istockphoto.com/id/918562214/photo/close-up-new-brown-baseball-hat-studio-shot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Hb14qzRfqq6S0Jbd3UDJ64H7h7lbgUpJm8k7ed7mmvk=',
                price:160,
            
                
            },

            {
                id:9,
                name:'Browny',
                imageUrl:'https://media.istockphoto.com/id/1189204411/photo/rodeo-horse-rider-wild-west-culture-americana-and-american-country-music-concept-theme-with-a.jpg?s=612x612&w=0&k=20&c=sMBI-taJCT3VjpBmptTJcELGvzLjva_-S2SUXve0euY=',
                price:140,
            
                
            }
     
     
            
        ],
    },
    {
        title:'Sneakers',
        items:[
            {
                id:10,
                name:'Adidas NMD',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZ3uAssVAbbC8kJM8TWEG-2jgZxuWeSJ90Q&usqp=CAU',
                price:1999,
            
            },
            {
                id:11,
                name:'Adidas Yeezy',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaR4jm6yfmkDqnwCfxTflOcJ30HCLFc_lng&usqp=CAU',
                price:1850,
            
            },
            {
                id:33,
                name:'shoe blue',
                imageUrl:'https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4=',
                price:550,
            
            },

            {
                id:39,
                name:'shoe blue',
                imageUrl:'https://media.istockphoto.com/id/695474472/photo/overhead-shot-of-white-sneakers-on-pink-background.jpg?s=612x612&w=0&k=20&c=GzsXYIfYMrZ2ZHXvM_rImCnBJkjZhgTJOxdMPLOJ22s=',
                price:899,
            
            },


        ]

    },
    {
        title:'Jackets',
        items:[
            {
                id:18,
                name:'Black Jean Shearing',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfJQ-uD6Kbic1GVhrfWr-rxWjBrs9LEEoXg&usqp=CAU',
                price:120,
            
            },
            {
                id:11,
                name:'winter jackets',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKM8ZYXya45Cj78mF4qTRfn7mtu7-PUFvVw&usqp=CAU',
                price:450,
            
            },
            {
                id:11,
                name:'jacket Black',
                imageUrl:'https://media.istockphoto.com/id/1319572164/photo/mens-hooded-jacket-with-zipper-for-your-design-mockup-for-print.jpg?s=612x612&w=0&k=20&c=cXEG9Bj_mQntlzs5pwvm6d8zlV6DNx9ueEakQuaimMU=',
                price:799,
            
            },


        ]

    },
    {
        title:'Mens',
        items:[
            {
                id:30,
                name:'Sweetwear Tshirt',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAZ768dl41AjiL_uNYCt-tbmqItD_1Bk9ig&usqp=CAU',
                price:120,
            
            },
            {
                id:31,
                name:'Hooded Tshirt',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmkHXIDo18ML--knPuIdBXz6OMQ5YOJps0g&usqp=CAU',
                price:450,
            
            },
            {
                id:40,
                name:'Tshirt',
                imageUrl:'https://media.istockphoto.com/id/1210524100/photo/portrait-of-handsome-serious-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=W_OP6RLSwhwNmorxWsfJBR2WBbH_dRaFm57WUEgCL7U=',
                price:399,
            
            },
            {
                id:55,
                name:'shirt',
                imageUrl:'https://media.istockphoto.com/id/1217985765/photo/closeup-portrait-of-handsome-young-businessman-in-glasses-looking-at-camera.jpg?s=612x612&w=0&k=20&c=K0o1rPry4qRefEEpoU_XxhmlPKI97BVc3Dt-lGShqXg=',
                price:599,
            
            },


        ]

    },
    {
        title:'Womens',
        items:[
            {
                id:32,
                name:'Little Blossom',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Z8qsT46_Ak9t1ten5_4GGYCq9dt7S-2e6w&usqp=CAU',
                price:230,
            
            },
            {
                id:34,
                name:'Hooded Tshirt',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDo0u_Pbp7a54rhzyM7Mw060KVBTVL0O8DbZGH2QL7ppRxsfI8tkTTV43jla0oEvHKb0&usqp=CAU',
                price:320,
            
            },
            {
                id:76,
                name:'trendy',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDo0u_Pbp7a54rhzyM7Mw060KVBTVL0O8DbZGH2QL7ppRxsfI8tkTTV43jla0oEvHKb0&usqp=CAU',
                price:750,
            
            },
            {
                id:84,
                name:'greeny',
                imageUrl:'https://media.istockphoto.com/id/940014538/photo/young-pretty-woman-akimbo-in-green-dress-looking-at-camera-isolated-on-orange.jpg?s=1024x1024&w=is&k=20&c=GpCgFOZXRbuszxVojHHk06uS6aY3LQQ_PZ0yqur_MxI=',
                price:499,
            
            },


        ]

    },
];

export{categories,PRODUCTS,SHOP_DATA};