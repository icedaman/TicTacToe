This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Lessons Learned

### Week 1 

- Creating a Git repository in my gitlab profile, project scaffolding and tooling setup: 
 	
- After logging in to my gitlab profile, in the tab projects select New project;

	-In the Blank project tab choose a name for the project, select the visibility level of the project and click in Create project;

	- Gitlab will then create the project repository and give a set of git command line instructions to set up the repository;

	- I will then need to open a terminal window in my folder project in my machine and run the previous command line instructions in order to create the git repository and add a remote url in order to be able to commit and push locally from my machine to the remote url where the git repository is located on gitlab;

	- On SourceTree add the existing local repository by selecting the folder which contains my project files locally;

### Week 2

**-State vs Props**

State=> object that is managed within the Component
Props=> object with properties that is passed to the Component
Store=> object with the entire state of the App, a global state, we can manage our App Store with Redux which is a predictable state container 


**-Testing**

It’s important to have tests so in case we change something or add a feature to our application and even though it’s working on a specific section, it lets us know that we may have created an error in another section of the app. 

Testing assures that everything is working as intended to and alerts us if something is not working the way it’s supposed to. Ideally we shouldn’t have to run every test manually so we should create automated tests to be more time efficient.

We should also create unit tests, tests of small fractions of the code, like a function and its expected values for example, so in case we get an error we can know right away where it was and fix it, before we have to find it by testing manually in the browser. 
Very important when working in teams to make sure that new added features by different colleagues are filtered in case they introduce an error in the code in our app.

Tools
Test Runner – executes tests and provides validation library => Jest

Testing Utilities – simulates the React App, mounts the components allowing us to look into the DOM, also allows us to render and test components independently of the entire App => Enzyme

Do’s
-test isolated units(reducer fn, Component fn)
-test conditional outputs

Don’ts
-no need to test librarys
-just the code we add to the Application	


Methods
Describe() = Describes fn takes 2 args, description to identify the test in the console output, and a testing fn, where we write our test

It()- describes allows to write 1 individual test

Shallow- renders the component with all its content but it’s not deeply rendered, only the placeholders are rendered, not the content, allowing to us to render isolated tests in components without the need to render its subtree components;
