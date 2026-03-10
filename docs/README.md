# MemoMate

Memomate is a memo making app that provides minimalistic UI. It asks for the date, mood of the user and what are their thoughts about the day. It was made using react native. Right now, I am able to provide an apk file for this project but I am trying to learn how to deploy this on playstore and app store.

## 📦 Technologies

- `React Native (Expo)`
- `Express`
- `MongoDB`
- `Tailwind CSS`
- `Javascript`
- `Nodemailer`
- `Authentication`

## 🎯 Features

Here's what you can do with Memomate:

- Sign-up or sign-in to MemoMate app.
- View Previously written memos.
- Write a new memo. This requires data, mood of the author and memo they want to write about.
- Save the memo on memomate and read the previous memos.
- Delete the previous memos from their account.

## 👨‍🎓 The Process

This project began as a simple idea: "What if taking memos felt effortless?" I wanted to create a space where users could capture their daily thoughts without friction. The journey started with understanding user needs; I spoke with potential users to understand how they prefer to journal and what features would make memo-writing a daily habit.

Then came the technical challenges: building a minimalistic yet functional UI, creating a secure backend to store personal memos, and ensuring the app works smoothly across different devices using React Native. The focus was on simplicity—asking only for the date, mood, and thoughts, nothing more.

## 🏗️ How I Built It

Building WellNest was like conducting an orchestra; every piece needed to work in harmony:

### Phase 1: The Foundation
I began to plan the user requirements. I tried to think about what operations a user can perform on my app and I mentioned them as functional depandencies. After that I worked on planning a layout of the mobile app. I tried to plan a system design and how to implement user authentication in this mobile app.

### Phase 2: The User Experience (React Native App)
Once the plan was complete, I started my creating the layout diagram of the mobile app. I used ai tools to create an avatar for my mobile app. I used different avatars for different pages of my mobile app. Once I was satisfied by the design. I implemented the layouts in React Native code. I made one page at a time and integrated all pages with the help of routing.

### Phase 3: The Engine Room (Express Backend)
To manage the authentication of users, I built a Express.js backend. This layer acts as the orchestrator—managing the flow of information between the user's input and the database, ensuring that every request is handled with low latency and high reliability.

### Phase 4: Integration
In this phase, I integrated my frontend mobile app with the backend Express.js api. I created api routes and called those api routes in the mobile app. I also got stuck for creating a backend structure that was not able to support by previous builds, but I was able to patch this bug.

### Phase 5: The Deployment
The final phase was about bringing Memomate app to the android. I built memomate.apk file using EAS. I deployed Express.js backend on Render.

## 🏫 What I Learned Along the Way

This project taught me many important lessons:

- **How to make React Native app**: I learned to make a react-native mobile app for the first time.
- **File architecture design**: Designing for project architecture leads to better experiences for developers and users.
- **Implementing authentication**: I learned to add authentication to the mobile app using jwt.

### Overall Growth:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.

## 🔧 How It Could Be Improved

WellNest is evolving, and there’s always room for growth:

- **AI-Powered Sentiment Analysis**: Adding ai agents for better sentiment analysis.
- **Google OAuth**: Implementing google authentication for faster signup and signin.
- **JWT Tokenization**: Using Json Web Tokens for authenticating users.
- **Onboarding Screen**: Adding an onboarding screen for new users.

## 🪧 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Open `scripts/mobile-server.bat`, `scripts/backend.bat` run expo server and backend server respectively.
4. Open `Expo Go` mobile app and scan the `QR code` to view the app.

## 🎥 Video


https://github.com/user-attachments/assets/d5f3066d-741d-48de-9593-daeb79b287e8

