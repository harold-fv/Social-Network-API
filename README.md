# Social Network API

## Description

This is an application where users can share their thoughts, react to friends’ thoughts, and create a friend list


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

To install and use the Social Network API application, please follow these steps:

1. You can clone this repository to your local machine using Git:

git clone https://github.com/harold-fv/Social-Network-API

2. Next, run the following on the command line, npm i mongoose


3. After you install the package ,from the command line type, npm run start. This is to load and run the program.



## Usage

To demonstrate the acceptance criteria, below is the overview of the application.

1. When I enter the command to invoke the application,then the server is started and the Mongoose models are synced to the MongoDB database.

<img width="180" alt="image" src="https://user-images.githubusercontent.com/120603153/236955587-16823649-dfd0-4c8a-b8cf-5946a3b55fc8.png">

<img width="1064" alt="image" src="https://user-images.githubusercontent.com/120603153/236955651-02dc538c-5289-4f01-9123-89a99a39f23b.png">


2. When the user opens API GET routes in Insomnia for users and thoughts, then the data for each of these routes is displayed in a formatted JSON.


3. When the user tests API POST, PUT, and DELETE routes in Insomnia, then the system will be able to successfully create, update, and delete users and thoughts in the database.

POST (Create a user)

<img width="1127" alt="image" src="https://user-images.githubusercontent.com/120603153/236955782-6abe5fe8-aee1-4ba9-ac61-8a1dd49ba0e4.png">

PUT (Update a user)

<img width="1102" alt="image" src="https://user-images.githubusercontent.com/120603153/236956034-46cfee65-4dee-4e54-af3c-617a99aa65b5.png">

DEL (Delete a user)

<img width="1061" alt="image" src="https://user-images.githubusercontent.com/120603153/236956164-a8953c8a-c45d-47f1-9101-fe1e465978ed.png">




4. When the user tests API POST and DELETE routes in Insomnia,then the system will be able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

POST (Create reactions to thoughts)




## Walkthrough Video

The following ia a walkthrough video that demonstrates the functionality of the social media API. 


1. The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:


2. The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:


3. The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

4. In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

5. The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:


6. In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

Overall, the social network API (Application Programming Interface) provides developers with the tools to integrate social media functionality into their applications. Social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and others provide APIs that enable developers to access various features of their platforms, including user authentication, user data retrieval, social sharing, messaging, and more.


