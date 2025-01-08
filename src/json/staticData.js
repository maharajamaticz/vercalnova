import Images from "@/app/Images";

const postData = [
    {
        id: 101,
        type: "creator",
        userName: "Liz",
        userRole: "Marketing Expertise",
        content: "Just posted a view video",
        postLists: [
            {
                postId: 110,
                imgSrc: Images.postImg,
                likeCount: "28.5M",
                commentCount: "12K",
                shareCount: "300K",
                time: "10mins",
                tagLine: "Kelly: Technology information",
                commentList:
                    [
                        {
                            id: 1,
                            username: 'user1',
                            text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                            likes: 5,
                            userImg: Images.userProfileIcon,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                                { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                                { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                            ],
                        },
                        { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3, replies: [] },
                        { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
                    ]
            }, {
                postId: 111,
                imgSrc: Images.postImg,
                likeCount: "28.5M",
                commentCount: "12K",
                shareCount: "300K",
                time: "10mins",
                tagLine: "Kelly: Technology information",
                commentList:
                    [
                        {
                            id: 1,
                            username: 'user1',
                            text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                            likes: 5,
                            userImg: Images.userProfileIcon,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                                { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                                { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                            ],
                        },
                        { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3, replies: [] },
                        { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
                    ]
            },
        ]
    },
    {
        id: 102,
        type: "creator",
        userName: "Mandy",
        userRole: "Influencer Inspiration",
        content: "Just posted a view video",
        postLists: [
            {
                postId: 112,
                imgSrc: Images.postImg,
                likeCount: "28.5M",
                commentCount: "12K",
                shareCount: "300K",
                time: "10mins",
                tagLine: "Kelly: Technology information",
                commentList:
                    [
                        {
                            id: 1,
                            username: 'user1',
                            text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                            likes: 5,
                            userImg: Images.userProfileIcon,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                                { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                                { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                            ],
                        },
                        {
                            id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                            ]
                        },
                        { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
                    ]
            }, {
                postId: 113,
                imgSrc: Images.postImg,
                likeCount: "28.5M",
                commentCount: "12K",
                shareCount: "300K",
                time: "10mins",
                tagLine: "Music: The Dark Knight Rises",
                commentList:
                    [
                        {
                            id: 1,
                            username: 'user1',
                            text: 'This is amazing!',
                            likes: 5,
                            userImg: Images.userProfileIcon,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree!', likes: 1 },
                                { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely!', likes: 0 },
                            ],
                        },
                        { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post!', likes: 3, replies: [] },
                        { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this!', likes: 2, replies: [] },
                    ]
            },
        ]
    },
    {
        id: 103,
        type: "creator",
        userName: "Mandy",
        userRole: "Influencer Inspiration",
        content: "Just posted a view video",
        postLists: [
            {
                postId: 114,
                imgSrc: Images.postImg,
                likeCount: "28.5M",
                commentCount: "12K",
                shareCount: "300K",
                time: "10mins",
                tagLine: "Kelly: Technology information",
                commentList:
                    [
                        {
                            id: 1,
                            username: 'user1',
                            text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                            likes: 5,
                            userImg: Images.userProfileIcon,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                                { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                                { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus,', likes: 0 },
                            ],
                        },
                        {
                            id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3,
                            replies: [
                                { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                            ]
                        },
                        { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet obcaecati dolores repellat', likes: 2, replies: [] },
                    ]
            }
        ]
    }
];

const postOverViewData = [
    {
        userId: 101,
        postId: 111,
        imgSrc: Images.communityhubPostImage,
        likeCount: "28.5M",
        commentCount: "12K",
        shareCount: "300K",
        time: "10mins",
        tagLine: "Kelly: Technology information aaaaaa",
        category: "video",
        commentList:
            [
                {
                    id: 1,
                    username: 'user1',
                    text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                    likes: 5,
                    userImg: Images.userProfileIcon,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                        { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                        { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                    ],
                },
                { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3, replies: [] },
                { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
            ]
    },
    {
        userId: 101,
        postId: 112,
        imgSrc: Images.postImg,
        likeCount: "28.5M",
        commentCount: "12K",
        shareCount: "300K",
        time: "10mins",
        tagLine: "Kelly: Technology information",
        category: "audio",
        commentList:
            [
                {
                    id: 1,
                    username: 'user1',
                    text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                    likes: 5,
                    userImg: Images.userProfileIcon,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                        { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                        { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                    ],
                },
                { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3, replies: [] },
                { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
            ]
    },
    {
        userId: 102,
        postId: 113,
        imgSrc: Images.postImg,
        likeCount: "28.5M",
        commentCount: "12K",
        shareCount: "300K",
        time: "10mins",
        tagLine: "Kelly: Technology information",
        category: "music",
        commentList:
            [
                {
                    id: 1,
                    username: 'user1',
                    text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                    likes: 5,
                    userImg: Images.userProfileIcon,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                        { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                        { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                    ],
                },
                {
                    id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                    ]
                },
                { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 2, replies: [] },
            ]
    },
    {

        userId: 102,
        postId: 114,
        imgSrc: Images.communityhubPostImage,
        likeCount: "28.5M",
        commentCount: "12K",
        shareCount: "300K",
        time: "10mins",
        tagLine: "Music: The Dark Knight Rises",
        category: "photos",
        commentList:
            [
                {
                    id: 1,
                    username: 'user1',
                    text: 'This is amazing!',
                    likes: 5,
                    userImg: Images.userProfileIcon,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree!', likes: 1 },
                        { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely!', likes: 0 },
                    ],
                },
                { id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post!', likes: 3, replies: [] },
                { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this!', likes: 2, replies: [] },
            ]
    },
    {
        userId: 103,
        postId: 115,
        imgSrc: Images.postImg,
        likeCount: "28.5M",
        commentCount: "13K",
        shareCount: "300K",
        time: "10mins",
        tagLine: "Kelly: Technology information",
        category: "photos",
        commentList:
            [
                {
                    id: 1,
                    username: 'user1',
                    text: 'This is amazing! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?',
                    likes: 5,
                    userImg: Images.userProfileIcon,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                        { id: 5, username: 'user5', userImg: Images.userProfileIcon, text: 'Absolutely! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 0 },
                        { id: 6, username: 'user6', userImg: Images.userProfileIcon, text: 'dolores amet neque eos unde ullam incidunt doloribus,', likes: 0 },
                    ],
                },
                {
                    id: 2, username: 'user2', userImg: Images.userProfileIcon, text: 'Wow, great post! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 3,
                    replies: [
                        { id: 4, username: 'user4', userImg: Images.userProfileIcon, text: 'Totally agree! dolores amet neque eos unde ullam incidunt doloribus, dolore repellat vel veritatis aperiam et animi sed tempore, obcaecati error excepturi quas?', likes: 1 },
                    ]
                },
                { id: 3, username: 'user3', userImg: Images.userProfileIcon, text: 'Love this! dolores amet obcaecati dolores repellat', likes: 2, replies: [] },
            ]

    }
];

const chatListData = [
    {
        useId: 101,
        profileImage: Images.chatProfile,
        name: "Joshua",
        message: "Have a nice day, bro!",
        time: "4min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 102,
        profileImage: Images.chatProfile,
        name: "Sarah",
        message: "Let's catch up later.",
        time: "10min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 103,
        profileImage: Images.chatProfile,
        name: "Daniel",
        message: "Meeting is at 3 PM, don't be late.",
        time: "15min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 104,
        profileImage: Images.chatProfile,
        name: "Emily",
        message: "Can you send me the files?",
        time: "20min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 105,
        profileImage: Images.chatProfile,
        name: "Michael",
        message: "Had a great time today, thanks!",
        time: "30min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 106,
        profileImage: Images.chatProfile,
        name: "Sophia",
        message: "Let me know when you're free.",
        time: "45min",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 107,
        profileImage: Images.chatProfile,
        name: "Chris",
        message: "Can we reschedule the call?",
        time: "1h",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 108,
        profileImage: Images.chatProfile,
        name: "Anna",
        message: "Thanks for your help earlier!",
        time: "2h",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 109,
        profileImage: Images.chatProfile,
        name: "Tom",
        message: "I'll talk to you tomorrow.",
        time: "3h",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 110,
        profileImage: Images.chatProfile,
        name: "Victoria",
        message: "Don't forget about our meeting!",
        time: "5h",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 111,
        profileImage: Images.chatProfile,
        name: "Liam",
        message: "Check out the latest update.",
        time: "1d",
        cameraIcon: Images.camaraIcon,
    },
    {
        useId: 112,
        profileImage: Images.chatProfile,
        name: "Olivia",
        message: "Great job on the presentation!",
        time: "2d",
        cameraIcon: Images.camaraIcon,
    },
]

const notificationData = [
    {
        type: "post",
        category: "New Asset",
        receivedName: "DEFI Guy posted",
        content: "What is the best way to add midi in Ableton?"
    },
    {
        type: "comment",
        receivedName: "OFF Chain",
        mention: "DEFI Guy posted",
        content: "What is the best way to add midi in Ableton?"
    },
    {
        type: "post",
        category: "Music Production",
        content: "What is the best way to add midi in Ableton?"
    },
    {
        type: "comment",
        receivedName: "DJ Guy",
        content: "I think the best way to get a  gig is to visit local venues and make connections"
    },
    {
        type: "comment",
        receivedName: "Local Runner ",
        content: "I think the best way to get a  gig is to visit local venues and make connections"
    },
    {
        type: "post",
        category: "Music Production",
        content: "Anyone ever try a wooden board"
    },
    {
        id: 101,
        type: "creator",
        userName: "Liz",
        userRole: "Marketing Expertise",
        typeOfPost: "image",
        content: "Just posted a view video",
    },
    {
        id: 102,
        type: "creator",
        userName: "Mandy",
        typeOfPost: "image",
        userRole: "Influencer Inspiration",
        content: "Just posted a view Image",
    },
    {
        id: 103,
        type: "creator",
        userName: "Raja",
        typeOfPost: "video",
        userRole: "Influencer Inspiration",
        content: "Just posted a view video",
    },
];

const daoFilterList = [
    { keyName: "Help" },
    { keyName: "Setting" },
    { keyName: "Transaction History" },
];

const categoryFilterList = [
    { keyName: "All" },
    { keyName: "Music" },
    { keyName: "Sport" },
    { keyName: "Culture" },
    { keyName: "Gaming" },
    { keyName: "Travel" },
    { keyName: "Health" },
    { keyName: "Wellness" },
    { keyName: "Education" },
    { keyName: "Outdoors" },
    { keyName: "Entertainment" },
    { keyName: "Spirituality" },
];

const selectOption = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const suggestionUserList = [
    { id: 1, name: "Azeem Roman", img: Images.profile, followed: false },
    { id: 2, name: "Richard Hacker", img: Images.profile1, followed: false },
    { id: 3, name: "Marvin McKevirn", img: Images.profile2, followed: false },
    { id: 4, name: "Walker Lincoln", img: Images.profile, followed: false },
    { id: 5, name: "Tom Holland", img: Images.profile2, followed: false },
    { id: 6, name: "Funny guy", img: Images.profile3, followed: false },
]

const profilePosts = {
    posts: [
        { imgSrc: Images.postImg1, },
        { imgSrc: Images.postImg2, },
        { imgSrc: Images.postImg3, },
        { imgSrc: Images.postImg4, },
        { imgSrc: Images.postImg5, },
        { imgSrc: Images.postImg6, },
    ],
    pins: [
        { imgSrc: Images.postImg4, },
        { imgSrc: Images.postImg5, },
        { imgSrc: Images.postImg6, },
    ],
    private: [
        { imgSrc: Images.postImg1, },
        { imgSrc: Images.postImg2, },
        { imgSrc: Images.postImg5, },
        { imgSrc: Images.postImg6, },
    ],
}


export { postData, postOverViewData, chatListData, notificationData, daoFilterList, categoryFilterList, selectOption, suggestionUserList, profilePosts };