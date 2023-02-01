import React from "react";

export const RESUME_EMPLOYMENT_DATA = [
    {
        label: "Software Developer at Lotus Bedding Groups, Bangkok",
        timeRange: "FEBRUARY 2020 — PRESENT",
        description:
            "Working as software developer, create and maintain company's websites and applications",
        projects: [
            {
                label: "De Hygienique - Customer App - ( Processing upload to Apple & Play Store )",
                content: (
                    <React.Fragment>
                        <p>
                            - Description:De Hygienique provide cleaning service
                            for customer around Bangkok and some other provinces
                            in Thailand.This application help customer to create
                            booking ,manage vouchers , order history and edit
                            and view their profile.
                        </p>
                        <p>
                            - Tech: React Native, GraphQl ,React-redux,Firebase
                            Messaging, ...
                        </p>
                    </React.Fragment>
                ),
                images: [
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9331.png"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9331.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9895.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9895.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9896.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9896.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9897.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9897.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9898.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9898.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9899.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9899.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9900.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9900.PNG"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/customer-app/IMG_9901.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/customer-app/IMG_9901.PNG"),
                    },
                ],
            },
            {
                label: "De Hygienique - Technical App - ( Processing upload to Apple & Play Store )",
                content: (
                    <React.Fragment>
                        <p>
                            - Description:De Hygienique provide cleaning service
                            for customer around Bangkok and some other provinces
                            in Thailand.This application help the employee to
                            create and manage their works ,schedule, bookings
                            and orders. It also integrated with the Work
                            Infinity System so employee can login to this app
                            from the Work Infinity X App.
                        </p>
                        <p>
                            - Tech: React Native, GraphQl ,React-redux,Firebase
                            Messaging, ...
                        </p>
                    </React.Fragment>
                ),
                images: [
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9902.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9902.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9903.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9903.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9904.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9904.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9906.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9906.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9907.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9907.png"),
                    },
                    {
                        original: require("public/images/projects/de-hygienique/technical-app/IMG_9908.PNG"),
                        thumbnail: require("public/images/projects/de-hygienique/technical-app/IMG_9908.png"),
                    },
                ],
            },
            {
                label: "Sale Infinity X - Web",
                iconWeb: "https://info.salesinfinityx.com/",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: Web page to place order , create and
                            manage products , includes dashboard page to monitor
                            data, create cart rules , promotions, transfer and
                            receive stocks.
                        </p>
                        <p>
                            - Tech: Reactjs, Rest API , React-redux, SCSS,
                            Material UI , Bootstrap,Firebase Messaging,
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Sale Infinity X - App",
                iconAndroidIos: {
                    linkAndroid:
                        "https://play.google.com/store/apps/details?id=com.lotusbedding.onlinesalesorder&hl=th&gl=US",
                    linkIos:
                        "https://apps.apple.com/th/app/sales-infinity-x/id1521821249",
                },
                content: (
                    <React.Fragment>
                        <p>
                            - Description: app version includes all
                            functionality of the web version
                        </p>
                        <p>
                            - Tech: React Native, Rest API ,React-redux,Firebase
                            Messaging, ...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Work Infinity X - Admin",
                iconWeb: "https://hr.workinfinityx.com/",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: web page for HR to manage company
                            employees, includes create employee , users,
                            settings, create and approve employee request,
                            display and manage employee check time , dashboard
                            to display and monitor data regards employee’s
                            working data.
                        </p>
                        <p>
                            - Tech: ReactJS, SCSS , Bootstrap,
                            GraphQL,Typescript, React-redux,Firebase
                            Messaging...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Work Infinity X - Employee Web",
                iconWeb: " https://bit.ly/3IZJOdc",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: web page for the employees to access
                            and create requests, read company news, receive
                            notification regarding their works, check calendar
                            for holidays and company special events, check
                            salary ...
                        </p>
                        <p>
                            - Tech: ReactJS, SCSS , Bootstrap,
                            GraphQL,Typescript, React-redux,Firebase
                            Messaging...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Work Infinity X - Employee App",
                iconAndroidIos: {
                    linkAndroid: " https://bit.ly/3PvertC",
                    linkIos: "https://apple.co/3crpBkg",
                },
                content: (
                    <React.Fragment>
                        <p>
                            - Description: App for employees to check time ,
                            create request, check in box , receive news and
                            notification regarding their company and works, see
                            team members , for manages they can approve request
                            and check time for their staffs .
                        </p>
                        <p>
                            - Tech: React
                            Native,GraphQL,Typescript,React-redux,Firebase
                            Messaging, ...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Mattress City - Admin",
                iconWeb: "https://bit.ly/3vczEjF",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: admin page to manage FE site ,create
                            products, customers, users , admins, roles....
                        </p>
                        <p>
                            - Tech: ReactJS, SCSS , Bootstrap, Rest
                            API,React-redux...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Mattress City - Ecommerce",
                iconWeb: "https://bit.ly/3aWNP5P",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: e-commercial site for customers to
                            find products, place orders , make payments... -
                        </p>
                        <p>
                            - Tech: NextJS, Typescript, SCSS , Bootstrap, Oauth,
                            Rest API,React-redux,...
                        </p>
                    </React.Fragment>
                ),
                images: [
                    {
                        original: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.46.51.png"),
                        thumbnail: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.46.51.png"),
                    },
                    {
                        original: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.47.16.png"),
                        thumbnail: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.47.16.png"),
                    },
                    {
                        original: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.48.11.png"),
                        thumbnail: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.48.11.png"),
                    },
                    {
                        original: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.52.28.png"),
                        thumbnail: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.52.28.png"),
                    },
                    {
                        original: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.52.35.png"),
                        thumbnail: require("public/images/projects/mattrresscity/fe/Screen Shot 2022-07-03 at 20.52.35.png"),
                    },
                ],
            },
        ],
    },
    {
        label: "Freelance Software Developer - Hanoi",
        timeRange: "JANUARY 2017 — DECEMBER 2019",
        description:
            "Work as freelancer for software developer , main job is FE developer in Reactjs and React Native",
        projects: [
            {
                label: "NSA Global Dashboard",
                iconWeb: "https://nsa-global.com/",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: App for employees to check time ,
                            create request, check in box , receive news and
                            notification regarding their company and works, see
                            team members , for manages they can approve request
                            and check time for their staffs .
                        </p>
                        <p>
                            - Tech: ReactJs,Rest API,React-redux,Firebase
                            Authentication,CSS, ...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Camera Works",
                iconWeb: "https://www.cameraworks.co.uk/",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: Website for selling camera and camera
                            accessories products. Implement functions like
                            filters , search products... and building UI for
                            some pages like list product , categories..
                        </p>
                        <p>
                            - Tech: ReactJs,Rest
                            API,React-redux,Redux-Saga,SCSS, ...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Work Plus",
                iconWeb: "https://workplus.vn/",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: Web Page to manage work and tasks for
                            project team or group, assining task, boost
                            performance of team work
                        </p>
                        <p>
                            - Tech: ReactJs,Rest
                            API,React-redux,Redux-Saga,SCSS,Material-UI, ...
                        </p>
                    </React.Fragment>
                ),
            },
            {
                label: "Task Infinity App",
                content: (
                    <React.Fragment>
                        <p>
                            - Description: App to create tasks , work and assign
                            to employees , similar to trello and click-up.
                        </p>
                        <p>
                            - Tech: React Native,Rest API,React-redux,Firebase
                            Messaging...
                        </p>
                    </React.Fragment>
                ),
            },
        ],
    },
    {
        label: "Automation Engineer at Kinden , Hanoi",
        timeRange: "APRIL 2015 — DECEMBER 2016",
        description:
            "Work as Automation Engineer in company project of building management system for shopping mall",
        projects: ` Coming soon...`,
    },
    {
        label: "Automation Engineer at Thai Hoang Company , Hanoi",
        timeRange: "JUNE 2014 — MARCH 2015",
        description:
            "Work Automation Control Engineer in maintaining and developing new product",
        projects: ` Coming soon...`,
    },
    {
        label: "Automation Engineer at LG Electronic, Hanoi",
        timeRange: "FEBRUARY 2014 — MAY 2014",
        description:
            "Work as intern for LG Electronic Vietnam in RD department",
        projects: ` Coming soon...`,
    },
];

export declare type ResumeEmploymentDataType = typeof RESUME_EMPLOYMENT_DATA[0];

const PROJECT = RESUME_EMPLOYMENT_DATA[0].projects[1];

export declare type ResumeEmploymentDataProjectType = typeof PROJECT;
