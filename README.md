# UUMDahBaca
PostIt is a fully-featured social media web application, built with the MERN stack.  

Deployed at: https://influencers-reddit.vercel.app/
![Walkthru](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/be06c806-1935-4a8a-802d-999e0dd20d46)

## Features
- Create, read, update and delete posts
- Like and unlike posts
- Create, reply to, read, update and delete nested comments
- Markdown for posts and comments
- Sign up and login using JWT for authentication
- Private message users in real-time using socket.io
- View profiles of users and browse through their posts, liked posts and comments
- Infinite scrolling 
- Sort posts by attributes such as like count, comment count and date created
- Profanity filtering and posting/commenting cooldowns
- Update bio which can be viewed by other users
- Search for posts by their title
- View the users who liked a particular post
- Fully responsive layout

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ihtasham42/social-media-app.git
```
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd influencers-reddit
cd client
npm start
```

## Screenshots of Features
### Explore view
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/235b2bbd-21d6-4674-9cee-0e099f822847)

### Post view
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/4c4822d9-7429-4dd6-9000-28be6ee52f0e)

### Nested comments
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/423c9af5-4e4f-49d9-8742-c37824b16acb)

### Profile view
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/6225aa17-d270-49c7-92bf-f4b0a3d187cc)

### Real-time private messenger
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/4d0688a7-b4ca-4a1f-a89b-2aea0dd9ee9b)

### Search view
![image](https://github.com/AlifBrahim/influencers-reddit/assets/92504870/83d3e6fb-0380-4bcd-bf3f-f223c0641f9c)


