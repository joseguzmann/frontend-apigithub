# FrontendApigithub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Installation

Clone the repository into your computer

```
git clone https://github.com/joseguzmann/frontend-apigithub
```

In project's root folder run the following command to install dependencies

```
npm install
```

Start the web application

```
npm run start
```

## Project's structure

The project's structure follows Angular framework

- **Components**
  - **App component**<br>
    Main component
  - **Profile component**<br>
    Shows profile information
  - **Repositories component**<br>
    Shows repositories list
- **Models**
  - RepositoriesList interface
  - Repository interface
  - User interface
- **Services**
  - **ApiService**<br>
    Contains GET methods that will be used on Profile and Repositories components through dependency injection<br>
    GET methods inside this service use HttpClient which uses RxJS and reactive programming
    
